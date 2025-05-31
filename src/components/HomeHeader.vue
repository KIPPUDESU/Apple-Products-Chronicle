<template>
    <div class="
    flex flex-col
    justify-center items-center
    h-full w-full
    relative 
    ">
     <div class="
     flex absolute top-0 w-100
     ">
        <img src="../images/Apple.png" alt="">
     </div>
     <div class="
     flex flex-nowrap gap-4 absolute
     text-8xl font-bold top-100
     ">
        <h1 class="
        bg-gradient-to-b
        from-black to-gray-600
        bg-clip-text text-transparent
        ">APPLE </h1>
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
     bg-gradient-to-r from-blue-500 to-blue-700
    text-white font-semibold text-lg rounded-3xl
    shadow-2xl hover:from-blue-600 hover:to-blue-800
    focus:outline-none focus:ring-2
    focus:ring-blue-500 transition duration-200
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