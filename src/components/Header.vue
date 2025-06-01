<template>
<div>
    <div
:class="[
    'absolute z-20 top-0 left-0 w-full h-80 bg-white drop-shadow-2xl transition-transform duration-800 ease-in-out',
    jumpHeader ? 'translate-y-0' : '-translate-y-full'
  ]"
>
<div
class="
    absolute
    flex
    flex-col
    gap-1
    left-1/2
    -translate-x-1/2
    "
    >
    <div class="flex gap-2 mt-4">
    <h1 class="text-5xl font-bold">MacBook Air</h1>
    <h1 class="bg-clip-text text-transparent bg-gradient-to-r from-gray-700 to-gray-300 text-5xl font-bold">M2</h1>
   </div>
    <p class="text-center text-gray-400">Completely Redesigned Around M2</p>
</div>
</div>
</div>
</template>

<script setup lang="ts">
interface Props {
    jumpHeader: boolean;
}

const {jumpHeader} = defineProps<Props>();
</script>