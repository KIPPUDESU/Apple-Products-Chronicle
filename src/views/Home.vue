<template>
<div 
class="flex flex-col gap-10 h-max w-max"
>
<div
class="
flex h-screen w-screen justify-center items-center text-8xl text-center font-bold
bg-gradient-to-br from-gray-100 to-gray-400
"
>这里是主页上方</div>
<div
class="flex h-350 "
>
<div>
<HomeCard />
</div>
</div>
</div>
</template>

<script setup="ts">
import HomeCard from '../components/HomeCard.vue';
</script>

<style>

</style>