<template>
<div>
<div 
class="
flex justify-center items-center 
gap-40"
>
 <div v-for="product in products" 
     :key="product.id"
     class="w-50 flex-none
     odd:mt-2
     even:-mt-20
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
import { products } from '../DataSupply/ProductData'
</script>

<style>

</style>