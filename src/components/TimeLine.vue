<template>
<div>
<div 
class="
flex  h-screen gap-40 justify-center items-center"
>
 <div v-for="product in products" 
     :key="product.id"
     class="w-50 flex-none z-10 
     odd:mt-2
     even:-mt-10
     "
     >
     <!-- 直接在v-for内写flex容器会给所有年份元素添加上这个容器,所以把flex给到外层 -->
     <!-- class="flex gap-1 w-screen h-full justify-center overflow-x-auto"> -->
    <div class="text-xl text-center font-bold text-gray-700">
    {{ product.year }}
    </div>
 </div>
</div>
</div>
</template>

<script setup lang="ts">
import { products } from '../DataSupply/iPhoneData'
</script>

<style>

</style>