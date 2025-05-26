<template>
  <div class="flex gap-40 w-screen h-screen justify-center overflow-x-auto">
    <div
  v-for="product in products" 
  :key="product.id"
  class="z-20 flex flex-none h-62 w-50
         relative rounded-2xl drop-shadow-2xl justify-center
         bg-gradient-to-bl from-gray-100 to-white/80 backdrop-blur-2xl
         transition-all duration-800 ease-in-out"
  :class="jumpHeader ? 'mt-60' : (product.id % 2 === 0 ? 'mt-108' : 'mt-16')"
>
<!-- 上面采用逻辑的嵌套，要么点击后都回到60，要么计算奇偶一个上一个下（错落） -->

     <!-- 上半背景层 -->
    <!-- <div class="absolute inset-x-0 top-0 h-6/10 bg-gradient-to-r
    from-white/40 to-gray-100/40 rounded-t-4xl drop-shadow-2xl"></div>
    <!-- 下半背景层 -->
    <!-- <div class="absolute inset-x-0 bottom-0 h-4/10 bg-gradient-to-r
    from-white/70 to-gray-100/60 rounded-b-4xl drop-shadow-2xl"></div> -->
    <a href="#" class="absolute inset-0 z-30" @click.prevent="showHeader"></a>

    <div class="z-10 w-40 mt-6 drop-shadow-xl">
      <!-- 加冒号 :，代表绑定表达式，不然就是写死的字符串 -->
      <img :src="product.AppleImg" alt="">
    </div>
    <div class="absolute z-10 w-8 bottom-12 left-1/14 drop-shadow-2xl">
      <img :src="product.FeatureImg" alt="">
    </div>
    <div class="
    absolute bottom-8 left-17 text-[14px] font-bold
    ">
      <p>{{ product.desc[0] }}</p>
      <p>{{ product.desc[1] }}</p>
    </div>
    <div
    class="
    absolute bottom-0 left-0 drop-shadow-2xl
    transform translate-y-1/2 -translate-x-1/10
    text-[26px] font-bold whitespace-nowrap flex gap-1
    "
    >
      <h1>{{ product.title }}</h1>
      <h1 class="text-gray-700 text-[10px]">{{ product.plustitle }}</h1>
    </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { products } from '../DataSupply/ProductData'

//接收父组件传入的props：products
// 我现在有两个父组件，两个都引用了minicard
// 但是一个提供响应式数据，一个只用来触发点击事件
// 所以可以加个问号来关闭其中不提供数据的错误提示
interface Props {
  jumpHeader: boolean
}

// // 宏函数让子组件能够接收父组件传递的属性（添加安全类型）
// const props = defineProps<Props>()
// // 在底部把props解构出来丢给products和一个布尔值给jump
// const { jumpHeader } = props
const {jumpHeader} = defineProps<Props>()

const emit = defineEmits<{
  (e: 'showHeader'): void
}>();

function showHeader() {
  emit('showHeader')
}
</script>

<style>

</style>