// 定义数组类型
export interface Product {
  id: number
  AppleImg: string
  FeatureImg: string
  title: string
  plustitle: string
  desc: [string, string]

  Bigtitle?: string
  Bigplustitle?: string

  year: number
}

// 导出一个P类型的数组
export const products : Product[] = [
    {
    id: 1,
    // vue组件模板内资源解析机制和打包时机与ts文件相比不同（newURL）
    // 这是一个静态资源,就像：请帮我处理路径(绝对)！！
    AppleImg: 'src/images/MacBookAirM2(k).png',
    FeatureImg: 'src/images/M2(k).png',
    title: 'MacBook Air',
    plustitle: 'M2',
    desc: ['从昔日的楔形机身', '转变为更统一更薄的机身设计'],

    Bigtitle: 'MacBook Air M2',
    Bigplustitle: 'M2',

    year:2022
    },
    {
    id: 2,
    AppleImg: 'src/images/AppleWatchSeries10(k).png',
    FeatureImg: 'src/images/S10SIP(k).png',
    title: 'Apple Watch Series 10',
    plustitle: 'S10',
    desc: ['Apple Watch迄今', '最薄、以及显示屏最大的表款'],

    year:2024
    },
    {
    id: 3,
    AppleImg: 'src/images/ipadairM3(k).png',
    FeatureImg: 'src/images/M3(k).png',
    title: 'iPad Air',
    plustitle: 'M3',
    desc: ['采用新款妙控键盘', '浮式支架设计，支持直通充电'],

    year:2025
    },
    {
    id: 4,
    AppleImg: 'src/images/iPhone 16 pro(k).png',
    FeatureImg: 'src/images/A18 PRO(k).png',
    title: 'iPhone 16 Pro',
    plustitle: 'A18 Pro',
    desc: ['48MP超广角摄像头', 'A18 Pro芯片为极致性能赋能'],

    year:2025
    },
    {
    id: 5,
    AppleImg: 'src/images/Mac studio M4(k).png',
    FeatureImg: 'src/images/M4 max.png',
    title: 'Mac Studio',
    plustitle: 'M4 Max',
    desc: ['为AI工作负载设计', '更加适合3D建模等高负载场景'],

    year:2025
    },
]