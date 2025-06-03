<template>
    <div 
    class="relative flex justify-center
    w-full 
    transition-all duration-200 ease-out z-0
    "
    :class="DownOrUp? 'h-screen bg-white/30 backdrop-blur-xl' : 'h-[44px] bg-white/0'"
    >
    <div class="
    flex relative w-full justify-center
    backdrop-blur-2xl bg-white/90
    transition-all duration-300 ease
    overflow-hidden
    "
    :class="DownOrUp? 'h-[452px]' : 'h-[44px]'"
    >
    <div class="
    flex absolute w-max top-0 h-[44px] justify-between items-center
    ">
        <div @click="goHome" class="px-2 mr-4">
          <a href="#">
            <svg height="48" viewBox="0 0 17 48" width="17" xmlns="http://www.w3.org/2000/svg"><path d="m15.5752 19.0792a4.2055 4.2055 0 0 0 -2.01 3.5376 4.0931 4.0931 0 0 0 2.4908 3.7542 9.7779 9.7779 0 0 1 -1.2755 2.6351c-.7941 1.1431-1.6244 2.2862-2.8878 2.2862s-1.5883-.734-3.0443-.734c-1.42 0-1.9252.7581-3.08.7581s-1.9611-1.0589-2.8876-2.3584a11.3987 11.3987 0 0 1 -1.9373-6.1487c0-3.61 2.3464-5.523 4.6566-5.523 1.2274 0 2.25.8062 3.02.8062.734 0 1.8771-.8543 3.2729-.8543a4.3778 4.3778 0 0 1 3.6822 1.841zm-6.8586-2.0456a1.3865 1.3865 0 0 1 -.2527-.024 1.6557 1.6557 0 0 1 -.0361-.337 4.0341 4.0341 0 0 1 1.0228-2.5148 4.1571 4.1571 0 0 1 2.7314-1.4078 1.7815 1.7815 0 0 1 .0361.373 4.1487 4.1487 0 0 1 -.9867 2.587 3.6039 3.6039 0 0 1 -2.5148 1.3236z"></path></svg>
          </a>
        </div>
        <div class="flex text-gray-700 relative">
            <!-- 大分类 -->
            <div
            v-for="item in AppleClass"
            :key="item.key"
            class="px-4 mx-2 cursor-pointer text-[12px]"
            @mouseenter="HeaderDown(item.key)"
            @mouseleave="HeaderUp"
            @click="ClassChange(item.key)"
            >
            {{ item.label }}

            <!-- 列表 -->
            <!-- 当DownOrUp为true，且SonKey=item.key才会被渲染-->
            <div
            v-show="DownOrUp && NowKey ===item.key"
            class="
            flex absolute -left-16 top-4 p-5 h-90 w-170
            "
            @mouseenter="HeaderDown(item.key)"
            @mouseleave="HeaderUp"
            >
             <ul class="py-[28px] ">
                <li class="text-[14px] text-gray-400">分类</li>
                <li
                v-for="Son in SonClass[item.key]"
                :key="Son.subKey"
                class="py-1.5
                transition-all duration-400 ease
                bg-black/80 hover:bg-gray-500 cursor-pointer
                text-[24px] font-bold hover:bg-clip-text hover:text-transparent
                bg-clip-text text-transparent
                "
                @click="SonClassChenge(item.key, Son.subKey)"
                >
                    {{ Son.label }}
                </li>
             </ul>
            </div>
            </div>
        </div>
    </div>
</div>
</div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const emit = defineEmits<{
 (event:'goHome'):void
 (event:'ClassChange',payload:string):void
}>()

function goHome() {
    console.log('打印了gohome')
    emit('goHome')
}

const DownOrUp = ref(false)
// 为nowkey赋予类型定义
const NowKey =ref<string | null>(null)

// 被触摸以后携带一个key，本key来自AppleClass传给@mouseenter
function HeaderDown(key: string) {
    NowKey.value = key
    DownOrUp.value = true
}

function HeaderUp() {
    DownOrUp.value = false
    NowKey.value = null
}

function ClassChange(ClassKey:string) {
    emit('ClassChange',ClassKey)
}


function SonClassChenge(itemKey:string, subKey:string) {
    console.log('点击了子菜单：', itemKey, subKey)
}

const AppleClass = [
    { key: 'iPhone', label:'iPhone' },
    { key: 'iPad', label: 'iPad' },
    { key: 'Watch', label: 'Watch' },
    { key: 'MacBook', label: 'MacBook' },
    { key: 'Mac', label: 'Mac' },
    { key: 'AirPods', label: 'AirPods' },
    { key: 'Vision', label: 'Vision' },
    ]

const SonClass = {
    iPhone: [
        { subKey: 'FulliPhone', label: '浏览所有 iPhone 品类' },
    ],
    iPad: [
        { subKey: 'FulliPad', label: '浏览所有 iPad 品类' },
        { subKey: 'Futus', label: 'iPad' },
        { subKey: 'Mini', label: 'iPad Mini' },
        { subKey: 'Air', label: 'iPad Air' },
        { subKey: 'Pro', label: 'iPad Pro' },
    ],
    Watch: [
        { subKey: 'FullWatch', label: '浏览所有 Watch 品类' },
        { subKey: 'Series', label: 'Apple Watch Series' },
        { subKey: 'SE', label: 'Apple Watch SE' },
        { subKey: 'Ultra', label: 'Apple Watch Ultra' },
        { subKey: 'Nike', label: 'Apple Watch Nike' },
        { subKey: 'Hermes', label: 'Apple Watch Hermes' },
    ],
    MacBook: [
        { subKey: 'FullBook', label: '浏览所有 MacBook 品类' },
        { subKey: 'BookAir', label: 'MacBook Air' },
        { subKey: 'BookPro', label: 'MacBook Pro' },
    ],
    Mac: [
        { subKey: 'FullMac', label: '浏览所有 Mac 品类' },
        { subKey: 'iMac', label: 'iMac' },
        { subKey: 'MacMini', label: 'Mac Mini' },
        { subKey: 'MacStudio', label: 'Mac Studio' },
        { subKey: 'MacPro', label: 'Mac Pro' },
    ],
    AirPods: [
        { subKey: 'FullAirPods', label: '浏览所有 AirPods 品类' },
        { subKey: 'FutusAirPods', label: 'AirPods' },
        { subKey: 'PodsPro', label: 'AirPods Pro' },
        { subKey: 'PodsMax', label: 'AirPods Max' },
        
    ],
    Vision: [
        { subKey: 'Vision', label: '下一个时代—Apple Vision Pro' }
    ],
    
}
</script>