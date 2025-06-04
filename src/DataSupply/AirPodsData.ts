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
    id: 5,
    AppleImg: 'src/images/iPhone 16 pro(k).png',
    FeatureImg: 'src/images/A18 PRO(k).png',
    title: 'iPhone 16 Pro',
    plustitle: 'A18 Pro',
    desc: ['48MP超广角摄像头', 'A18 Pro芯片为极致性能赋能'],

    year:2025
    },
    {
    id: 5,
    AppleImg: 'src/images/iPhone 16 pro(k).png',
    FeatureImg: 'src/images/A18 PRO(k).png',
    title: 'iPhone 16 Pro',
    plustitle: 'A18 Pro',
    desc: ['48MP超广角摄像头', 'A18 Pro芯片为极致性能赋能'],

    year:2025
    },
    {
    id: 5,
    AppleImg: 'src/images/iPhone 16 pro(k).png',
    FeatureImg: 'src/images/A18 PRO(k).png',
    title: 'iPhone 16 Pro',
    plustitle: 'A18 Pro',
    desc: ['48MP超广角摄像头', 'A18 Pro芯片为极致性能赋能'],

    year:2025
    },
    {
    id: 5,
    AppleImg: 'src/images/iPhone 16 pro(k).png',
    FeatureImg: 'src/images/A18 PRO(k).png',
    title: 'iPhone 16 Pro',
    plustitle: 'A18 Pro',
    desc: ['48MP超广角摄像头', 'A18 Pro芯片为极致性能赋能'],

    year:2025
    },
    {
    id: 5,
    AppleImg: 'src/images/iPhone 16 pro(k).png',
    FeatureImg: 'src/images/A18 PRO(k).png',
    title: 'iPhone 16 Pro',
    plustitle: 'A18 Pro',
    desc: ['48MP超广角摄像头', 'A18 Pro芯片为极致性能赋能'],

    year:2025
    },
    {
    id: 6,
    AppleImg: 'src/images/Mac studio M4(k).png',
    FeatureImg: 'src/images/M4 max.png',
    title: 'Mac Studio',
    plustitle: 'M4 Max',
    desc: ['为AI工作负载设计', '更加适合3D建模等高负载场景'],

    year:2025
    },
]