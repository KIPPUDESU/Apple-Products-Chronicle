<template>
  <div
  class="absolute w-full h-screen
  min-h-screen z-10
  bg-gradient-to-b
  from-white to-gray-400
  drop-shadow-2xl
  "
  >
  </div>
  <div class="pt-1">
    <Header :jumpHeader="jumpHeader" />
    <!-- 因为不向minicard传数组，所以再card内添加“？”来关闭错误提示（变成可选项） -->
    <MiniCard @showHeader="OnshowHeader" :jumpHeader="jumpHeader" />
  </div>
  
</template>

<script setup lang="ts">
import { ref, onBeforeUnmount, watch } from 'vue';
import MiniCard from './components/MiniCard.vue';
import Header from './components/Header.vue';

// 以下方法通过控制布尔值来操控header组件内
const jumpHeader = ref(false)

function OnshowHeader() 
{
  console.log('Header should show now');
  jumpHeader.value = true;
}

// let 声明能够保证变量只在当前代码块内有效
// 定义页面现在的位置
let ScrollNow = 0
// 定义页面在header出现后执行的方法
let ScrollListener: () => void

// 窥视jump部分是不是有数值更新（变为true）
watch(jumpHeader,(New) => {
  if(New) {
    ScrollListener = () => {
      // 开始添加监听测量,拥有两种方式
      const ScrollFuture = window.scrollY || document.documentElement.scrollTop

      if (ScrollFuture > ScrollNow + 10) {
        jumpHeader.value = false
      }

      // 用三元运算做一下Now的重新赋值
      ScrollNow = ScrollFuture <= 0 ? 0 : ScrollFuture
  }
  // 是否启用listener
    window.addEventListener('scroll', ScrollListener)
  } else {
    window.removeEventListener('scroll', ScrollListener)
  }
})

// 在卸载阶段加一个钩子，移除监听防止内存泄漏
onBeforeUnmount(() => {
  if(ScrollListener){
  window.removeEventListener('scroll', ScrollListener)
  }
})

</script>

<style>
@import "tailwindcss";
</style>