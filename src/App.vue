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

  <!-- 此处设定成h-screen会让高度超出页面，目前不知道原因 -->
  <div class="relative h-[98vh] w-max px-10 ">
  <div
  class="
  absolute inset-0 
  bg-gradient-to-b from-white to-gray-400 z-0"
  ></div>
  <div ref="applescoll" class="
  overflow-x-scroll h-full px-50
  ">
    <div class="absolute z-10 top-1/2">
      <TimeLine />
    </div>
    <Header :jumpHeader="jumpHeader" />
    <!-- 因为不向minicard传数组，所以再card内添加“？”来关闭错误提示（变成可选项） -->
    <MiniCard @showHeader="OnshowHeader" :jumpHeader="jumpHeader" />
  </div>

  </div>
  
</template>

<script setup lang="ts">
// import { ref, onBeforeUnmount, watch } from 'vue';
import { ref,onMounted, onBeforeUnmount } from 'vue';
import MiniCard from './components/MiniCard.vue';
import Header from './components/Header.vue';
import TimeLine from './components/TimeLine.vue';

// 以下方法通过控制布尔值来操控header组件内
const jumpHeader = ref(false)

function OnshowHeader() 
{
  console.log('Header should show now');
  jumpHeader.value = true;
}

// 以下部分基本废弃，放弃滚动回位的设计

// let 声明能够保证变量只在当前代码块内有效
// 定义页面现在的位置
// let ScrollNow = 0
// // 定义页面在header出现后执行的方法
// let ScrollListener: () => void

// // 窥视jump部分是不是有数值更新（变为true）
// watch(jumpHeader,(New) => {
//   if(New) {
//     ScrollListener = () => {
//       // 开始添加监听测量,拥有两种方式
//       const ScrollFuture = window.scrollY || document.documentElement.scrollTop

//       if (ScrollFuture > ScrollNow + 10) {
//         jumpHeader.value = false
//       }

//       // 用三元运算做一下Now的重新赋值
//       ScrollNow = ScrollFuture <= 0 ? 0 : ScrollFuture
//   }
//   // 是否启用listener
//     window.addEventListener('scroll', ScrollListener)
//   } else {
//     window.removeEventListener('scroll', ScrollListener)
//   }
// })

// // 在卸载阶段加一个钩子，移除监听防止内存泄漏
// onBeforeUnmount(() => {
//   if(ScrollListener){
//   window.removeEventListener('scroll', ScrollListener)
//   }
// })

// 以下是滚轮控制左右移动的逻辑
// 1.获取容器DOM：用ref绑定你的滚动容器。
// 2.监听wheel事件：在wheel事件中，阻止默认纵向滚动，把deltaY转为scrollLeft
// 3.在组件挂载/卸载时添加/移除事件监听。

// 该响应式引用所持有的值类型可以是 HTML**Div**Element or null
const applescoll = ref<HTMLDivElement | null>(null)
// e中包含了鼠标滚轮的滚动信息（wheelevent）
// 这里定义好的自定义事件handleWheel在后面被使用
function handleWheel(e:WheelEvent) {
  console.log('handleWheel', e.deltaY)
  if (applescoll.value) {
    if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
      // 阻止浏览器执行默认的滚动操作
      e.preventDefault()
    // scollLeft是浏览器默认的纵向滚动行为
    applescoll.value.scrollLeft += e.deltaY
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
  if (applescoll.value) {
    applescoll.value.removeEventListener('wheel', handleWheel)
  }
})

</script>

<style>
@import "tailwindcss";
</style>