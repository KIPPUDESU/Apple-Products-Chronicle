<template>
  <div class="flex gap-40 justify-center px-110">
    <div
      v-for="product in RenderAppleData" 
      :key="product.id"
      class="z-20 flex flex-none h-62 w-50
            rounded-2xl drop-shadow-2xl justify-center
            bg-gradient-to-bl from-gray-100/90 to-white/60 backdrop-blur-2xl
            transition-all duration-800 ease-in-out"
      :class="jumpHeader ? 'mt-60' : (product.id % 2 === 0 ? 'mt-110' : 'mt-15')"
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
    absolute bottom-8 left-15 text-[15px] font-bold z-10
    ">
      <p>{{ product.desc[0] }}</p>
      <p>{{ product.desc[1] }}</p>
    </div>
    <div
    class="
    absolute bottom-0 left-0 drop-shadow-2xl
    transform translate-y-1/2 -translate-x-1/8
    text-[26px] font-bold whitespace-nowrap flex gap-1
    "
    >
      <h1>{{ product.title }}</h1>
      <h1 class="text-gray-700 text-[10px]">{{ product.plustitle }}</h1>
    </div>
    <div class="
    transition-all duration-650 ease-in-out
    absolute font-bold text-gray-700 text-[25px]
    "
    :class="jumpHeader ? (product.id % 2 === 0 ? 'top-30 opacity-0' : 'top-30 opacity-0') : (product.id % 2 === 0 ? '-top-30' : 'top-85')"
    >
      <h1>{{ product.year }}</h1>
    </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { products as FulliPhone } from '../DataSupply/iPhoneData'
import { products as FulliPad } from '../DataSupply/iPadData'
import { products as FullWatch } from '../DataSupply/WatchData'
import { products as FullBook } from '../DataSupply/BookData'
import { products as FullMac } from '../DataSupply/MacData'
import { products as FullAirPods } from '../DataSupply/AirPodsData'
import { products as Vision } from '../DataSupply/VisionData'


// // 宏函数让子组件能够接收父组件传递的属性（添加安全类型）
// const props = defineProps<Props>()
// // 在底部把props解构出来丢给products和一个布尔值给jump
// const { jumpHeader } = props
const { jumpHeader, OnAppleClassName } = defineProps<Props>()

//接收父组件传入的props：products
// 我现在有两个父组件，两个都引用了minicard
// 但是一个提供响应式数据，一个只用来触发点击事件
// 所以可以加个问号来关闭其中不提供数据的错误提示
interface Props {
  jumpHeader: boolean
  OnAppleClassName: string
}

const emit = defineEmits<{
  (e: 'showHeader'): void
}>();

function showHeader() {
  emit('showHeader')
}


// 此处定义一个ts数据的映射源
// Record定义一个key和一个任意类型any
const allDataMap: Record<string, Array<any>> = {
  FulliPhone: FulliPhone,
  FulliPad: FulliPad,
  FullWatch: FullWatch,
  FullBook: FullBook,
  FullMac: FullMac,
  FullAirPods: FullAirPods,
  Vision: Vision,
}

// 初始化被指定的源
const NowAppleData = ref<string>('FulliPhone')

// 立即根据 props 中传入的值进行切换
switchAppleData(OnAppleClassName)

// 或者监听 prop 变化
import { watch } from 'vue'
watch(() => OnAppleClassName, (newVal) => {
  switchAppleData(newVal)
})


// 通过传入的OnAppleClassName来指定NowAppleData
function switchAppleData(OnAppleClassName: string) {
  if (allDataMap[OnAppleClassName]) {
    NowAppleData.value = OnAppleClassName
  }
}

// 指定根据指定映射发送渲染
const RenderAppleData = computed(() => {
  return allDataMap[NowAppleData.value] || []   
})
</script>

<style>

</style>