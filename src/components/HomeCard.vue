<template>
<div class="flex">
    
    <div 
    v-for="product in products"
    :key="product.id"
    class="flex flex-none relative
    bg-gradient-to-b from-blue-100 to-white m-1
    rounded-2xl shadow-lg overflow-hidden
    "
    >
    <div class="
    absolute flex flex-col gap-1.5 top-1/10 left-1/12
    text-white mix-blend-difference
    ">
        <h1 class="font-bold text-[30px] z-10">{{ product.categoryTitle }}</h1>
        <p class="font-bold text-[14px]">{{ product.plusTitle }}</p>
    </div>
    <img :src="product.categoryImg" alt="">
    </div>
    </div>
</template>

<script setup lang="ts">
import { products } from '../DataSupply/HomeData'
</script>