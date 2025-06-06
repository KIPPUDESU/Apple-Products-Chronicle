<template>
    <div class="
    flex flex-col
    justify-center items-center
    h-full w-full
    relative 
    ">
     <div class="
     flex absolute top-20 w-90
     ">
        <img src="../images/Apple.png" alt="">
     </div>
     <div class="
     flex flex-nowrap gap-4 absolute
     text-[100px] font-bold top-95
     ">
        <h1 class="
        bg-gradient-to-b
        from-black to-gray-600
        bg-clip-text text-transparent
        ">Apple </h1>
        <h1 class="
        bg-gradient-to-b
        from-black to-gray-600
        bg-clip-text text-transparent
        "
        > Products:</h1>
        <h1 class="
        bg-gradient-to-br
        from-blue-900 to-black
        bg-clip-text text-transparent
        ">Chronicle</h1>
     </div>
     <div class="top-140
     flex absolute items-center justify-center px-6 py-3 
     bg-gradient-to-r from-white/80 to-white/40 backdrop-blur-2xl
    text-black/80 font-semibold text-lg rounded-3xl
    shadow-xl hover:from-gray-100/50 hover:to-gray-200/50
    focus:outline-none focus:ring-2
    focus:ring-white transition duration-200
     ">
        <button @click="goTimeLine">关于Apple 请看 ></button>
     </div>
    </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()

function goTimeLine(): void {
    router.push({ path: '/timeline' })
}
</script>