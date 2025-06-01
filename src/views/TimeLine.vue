<template>
  <!-- <div
  class="absolute w-max h-screen
  overflow-x-auto z-10 
  bg-gradient-to-b
  from-white to-gray-400
  drop-shadow-2xl
  "
  >
  </div> -->

  <div class="relative h-screen">
    <div class="flex absolute z-10 w-30 h-12 m-3 bg-red-300">
      <ClassButton />
    </div>
  <!-- 滚动容器 -->
  <div ref="applescoll" class="
  flex overflow-x-scroll h-full w-full
  ">
  <!-- 背景 -->
  <div
  class="
  absolute inset-0 
  bg-gradient-to-r from-white to-gray-500 z-0"
  ></div>
    <!-- transition-all duration-500 ease-in-out添加动画类 -->
    <!-- 时间线 -->
    <div class="
    absolute top-1/2 left-1/2 -translate-x-1/2 rounded-2xl
    h-1 bg-gradient-to-r from-gray-500/70 to-gray-300/80 backdrop-blur-2xl
    transition-all duration-500 ease-in-out
    "
    :class="jumpHeader ? 'w-0' : 'w-350' "
    ></div>
    <button class="
    absolute h-20 w-20 right-0 top-1/2 mx-4
    transform -translate-y-1/2 rounded-3xl
    bg-gray-500 text-white/50 p-2 opacity-30
    hover:opacity-80 transition duration-500
    text-4xl
    " @click="goHome">
     >
    </button>

    <!-- 头部内容 -->
    <Header :jumpHeader="jumpHeader" />
    <!-- 因为不向minicard传数组，所以再card内添加“？”来关闭错误提示（变成可选项） -->
     <!-- 卡片 -->
    <MiniCard @showHeader="OnshowHeader" :jumpHeader="jumpHeader" />
  </div>

  </div>
  
</template>

<script setup lang="ts">
// import { ref, onBeforeUnmount, watch } from 'vue';
import { ref,onMounted, onBeforeUnmount } from 'vue';
import MiniCard from '../components/MiniCard.vue';
import Header from '../components/Header.vue';
import ClassButton from '../components/ClassButton.vue';
// import TimeLine from './components/TimeLine.vue';
import { useRouter } from 'vue-router'
const router = useRouter()

function goHome(): void {
    router.push({ path: '/' })
}
// 以下方法通过控制布尔值来操控header组件内
const jumpHeader = ref(false)

function OnshowHeader() 
{
  console.log('Header should show now');
  jumpHeader.value = true;
}

// 以下是滚轮控制左右移动的逻辑
// 1.获取容器DOM：用ref绑定你的滚动容器。
// 2.监听wheel事件：在wheel事件中，阻止默认纵向滚动，把deltaY转为scrollLeft
// 3.在组件挂载/卸载时添加/移除事件监听。

// 该响应式引用所持有的值类型可以是 HTML**Div**Element or null
const applescoll = ref<HTMLDivElement | null>(null)

// 定义一个现在与目标的位置
let currentX = 0
// 目标位置在下面赋值
let targetX = 0
// 获取动画返回的id
let animationID: number | null = null

// 设计一个缓动函数计算方法：0快1慢，t在0~1内提供进度
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
      // 定义一个可以调整的滑动参数alpha
      const alpha = 0.3
      // 每次根据新的值重新计算currentX还需要往taget靠近多少距离
      // 不过这里我直接把阿尔法给easeout计算方法了，导致easeout也是个死数字，没什么意义，后续优化
      currentX += endX * alpha * easeout(alpha)
    }
      // 计算到的值不断赋值给left
      applescoll.value.scrollLeft = currentX

      // 在达到0.5之前始终运行我们的requestAnimationFrame给id赋值
      if (Math.abs(targetX - currentX) > 0.5) {
      // 浏览器在下一帧自动再次调用animationScroll
        animationID = requestAnimationFrame(animationScroll)
      }
      else {
        animationID = null
      }
  }
}

// e中包含了鼠标滚轮的滚动信息（wheelevent）
// 这里定义好的自定义事件handleWheel在后面被使用
function handleWheel(e:WheelEvent) {
  console.log('handleWheel', e.deltaY)
  if (applescoll.value) {
    if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
      // 阻止浏览器执行默认的滚动操作
      e.preventDefault()
    // scollLeft是浏览器默认的纵向滚动行为，添加动画方法以后便不再需要
    // applescoll.value.scrollLeft += e.deltaY

    // 计算目标滚动位置给taget，并限制它在允许的范围内
    targetX = Math.max(
      0,
      Math.min(
        // 总宽度减可视内容得到超出的可被滚动的范围
        applescoll.value.scrollWidth - applescoll.value.clientWidth,
        // or(提供选择最终让最大距离不至于超过可滚动的长度)
      targetX + e.deltaY
      )
    )
    // 如果动画没在跑，就启动它
    if (animationID === null) {
      currentX = applescoll.value.scrollLeft
      animationID = requestAnimationFrame(animationScroll)
    }
    }
  }
}

// 挂载完成后告诉浏览器:这不是单纯的监听!!
// 没有这个钩子,前面的事件不会被调用
onMounted(() => {
  // addEventListener:这个方法允许你告诉浏览器“当某个特定操作发生时，我想要执行后续内容
  // wheel:是鼠标滚轮事件
  applescoll.value?.addEventListener('wheel', handleWheel, { passive: false })
}
)

// 避免内存泄漏
onBeforeUnmount(() => {
  applescoll.value?.removeEventListener('wheel', handleWheel)
  // 动画停止时id的值就是null,停止整个帧渲染
  if (animationID) cancelAnimationFrame(animationID)
})

</script>

<style>

</style>