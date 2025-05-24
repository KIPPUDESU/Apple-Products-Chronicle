<template>
    <a href="#" @click.prevent="showHeader">
      <div
    class="
    absolute
    z-20
    flex
    h-72
    w-60
    top-1/4
    inset-x-0
    mx-auto
    rounded-2xl
    drop-shadow-2xl
    justify-center
    bg-gradient-to-bl
    from-gray-100 to-white/80
    backdrop-blur-2xl
    transition-all duration-800 ease-in-out
    "
    :class="jumpHeader ? 'mt-14' : 'mt-0'"
    >
     <!-- 上半背景层 -->
    <!-- <div class="absolute inset-x-0 top-0 h-6/10 bg-gradient-to-r
    from-white/40 to-gray-100/40 rounded-t-4xl drop-shadow-2xl"></div>
    <!-- 下半背景层 -->
    <!-- <div class="absolute inset-x-0 bottom-0 h-4/10 bg-gradient-to-r
    from-white/70 to-gray-100/60 rounded-b-4xl drop-shadow-2xl"></div> -->

    <div class="z-10 w-50 mt-6 drop-shadow-xl">
      <img src="../images/MacBookAirM2(k).png" alt="">
    </div>
    <div class="absolute z-10 w-10 bottom-12 left-1/14 drop-shadow-2xl">
      <img src="../images/M2(k).png" alt="">
    </div>
    <div class="
    absolute
    bottom-8
    left-17
    text-[15px]
    font-bold
    ">
      <p>从昔日的楔形机身</p>
      <p>转变为更统一更薄的机身设计</p>
    </div>
    <div
    class="
    absolute
    bottom-0
    left-0
    transform
    translate-y-1/2
    -translate-x-1/10
    text-[29px]
    font-bold
    drop-shadow-2xl
    whitespace-nowrap
    flex
    gap-1
    "
    >
      <h1>MacBook Air</h1>
      <h1 class="text-gray-700 text-[10px]">M2</h1>
    </div>
    </div>
    </a>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  (e: 'showHeader'): void;
}>();

function showHeader() {
  emit('showHeader');
}

interface Props {
    jumpHeader: boolean;
}

const {jumpHeader} = defineProps<Props>();
</script>

<style>

</style>