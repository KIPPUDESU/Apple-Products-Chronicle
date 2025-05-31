<template>
<div 
class="flex flex-col relative gap-10"
>
  <div
  class="z-10
  flex h-screen w-full
  "
  >
  <HomeHeader />
  </div>
  <div ref="applescoll" class="flex overflow-x-scroll h-132 w-full" >
    <div
    class="
    absolute inset-0 
    bg-gradient-to-r from-white to-gray-400/50 z-0"
    ></div>
    <HomeCard />
  </div>
  <div
  class="
  flex z-10 justify-center items-center h-100 w-full"
  >
  <h1 class="text-8xl text-center font-bold">占位</h1>
  </div>
</div>
</template>

<script setup lang="ts">
import { ref,onMounted, onBeforeUnmount } from 'vue';
import HomeCard from '../components/HomeCard.vue';
import HomeHeader from '../components/HomeHeader.vue';

const applescoll = ref<HTMLDivElement | null>(null)

let currentX = 0
let targetX = 0
let animationID: number | null = null

function easeout(t: number) {
  return t * (2 - t)
}

function animationScroll() {
  if(applescoll.value) {
    const endX = targetX - currentX
    if (Math.abs(endX) < 0.5) {
      currentX = targetX
    }
    else {
      const alpha = 0.3
      currentX += endX * alpha * easeout(alpha)
    }
      applescoll.value.scrollLeft = currentX

      if (Math.abs(targetX - currentX) > 0.5) {
        animationID = requestAnimationFrame(animationScroll)
      }
      else {
        animationID = null
      }
  }
}

function handleWheel(e:WheelEvent) {
  console.log('handleWheel', e.deltaY)
  if (applescoll.value) {
    if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
      e.preventDefault()

    targetX = Math.max(
      0,
      Math.min(
      applescoll.value.scrollWidth - applescoll.value.clientWidth,
      targetX + e.deltaY
      )
    )
    if (animationID === null) {
      currentX = applescoll.value.scrollLeft
      animationID = requestAnimationFrame(animationScroll)
    }
    }
  }
}

onMounted(() => {
  applescoll.value?.addEventListener('wheel', handleWheel, { passive: false })
}
)

onBeforeUnmount(() => {
  applescoll.value?.removeEventListener('wheel', handleWheel)
  if (animationID) cancelAnimationFrame(animationID)
})

</script>

<style>

</style>