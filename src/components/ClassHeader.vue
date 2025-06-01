<template>
    <div 
    class="relative flex justify-center
    w-full 
    transition-all duration-300 ease-out z-0
    "
    :class="DownOrUp? 'h-screen bg-white/30 backdrop-blur-xl' : 'h-[44px] bg-white/0'"
    >
    <div class="
    flex relative w-full justify-center
    backdrop-blur-2xl bg-white/80
    transition-all duration-500 ease
    "
    :class="DownOrUp? 'h-[452px]' : 'h-[44px]'"
    >
    <div class="
    flex absolute top-0 w-max h-[44px] justify-between items-center
    ">
        <div @click="goHome" class="px-2 mr-4">
            <a href="#"><svg height="48" viewBox="0 0 17 48" width="17" xmlns="http://www.w3.org/2000/svg"><path d="m15.5752 19.0792a4.2055 4.2055 0 0 0 -2.01 3.5376 4.0931 4.0931 0 0 0 2.4908 3.7542 9.7779 9.7779 0 0 1 -1.2755 2.6351c-.7941 1.1431-1.6244 2.2862-2.8878 2.2862s-1.5883-.734-3.0443-.734c-1.42 0-1.9252.7581-3.08.7581s-1.9611-1.0589-2.8876-2.3584a11.3987 11.3987 0 0 1 -1.9373-6.1487c0-3.61 2.3464-5.523 4.6566-5.523 1.2274 0 2.25.8062 3.02.8062.734 0 1.8771-.8543 3.2729-.8543a4.3778 4.3778 0 0 1 3.6822 1.841zm-6.8586-2.0456a1.3865 1.3865 0 0 1 -.2527-.024 1.6557 1.6557 0 0 1 -.0361-.337 4.0341 4.0341 0 0 1 1.0228-2.5148 4.1571 4.1571 0 0 1 2.7314-1.4078 1.7815 1.7815 0 0 1 .0361.373 4.1487 4.1487 0 0 1 -.9867 2.587 3.6039 3.6039 0 0 1 -2.5148 1.3236z"></path></svg></a>
        </div>
        <div class="flex text-gray-700">
            <ul class="px-4 mx-2 cursor-pointer h-full text-[12px]"
            @mouseenter="HeaderDown"
            @mouseleave="HeaderUp"
            >iPhone</ul>
            <ul 
            class="px-4 mx-2 cursor-pointer h-full text-[12px]"
            @mouseenter="HeaderDown"
            @mouseleave="HeaderUp"
            >iPad</ul>
            <ul class="px-4 mx-2 cursor-pointer h-full text-[12px]">Watch</ul>
            <ul class="px-4 mx-2 cursor-pointer h-full text-[12px]">MacBook</ul>
            <ul class="px-4 mx-2 cursor-pointer h-full text-[12px]">Mac</ul>
            <ul class="px-4 ml-2 cursor-pointer h-full text-[12px]">Vision</ul>
            <ul class="px-4 ml-2 cursor-pointer h-full text-[12px]">KIPPU</ul>
        </div>
    </div>
</div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const emit = defineEmits<{
 (event:'goHome'):void
}>()

function goHome() {
    console.log('打印')
    emit('goHome')
}

const DownOrUp = ref(false)

function HeaderDown() {
    DownOrUp.value = true
}

function HeaderUp() {
    DownOrUp.value = false
}
</script>