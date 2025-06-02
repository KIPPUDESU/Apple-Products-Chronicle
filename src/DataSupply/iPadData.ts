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
    id: 4,
    AppleImg: 'src/images/ipadairM3(k).png',
    FeatureImg: 'src/images/M3(k).png',
    title: 'iPad Air',
    plustitle: 'M3',
    desc: ['采用新款妙控键盘', '浮式支架设计，支持直通充电'],

    year:2025
    },
    {
    id: 4,
    AppleImg: 'src/images/ipadairM3(k).png',
    FeatureImg: 'src/images/M3(k).png',
    title: 'iPad Air',
    plustitle: 'M3',
    desc: ['采用新款妙控键盘', '浮式支架设计，支持直通充电'],

    year:2025
    },
    {
    id: 4,
    AppleImg: 'src/images/ipadairM3(k).png',
    FeatureImg: 'src/images/M3(k).png',
    title: 'iPad Air',
    plustitle: 'M3',
    desc: ['采用新款妙控键盘', '浮式支架设计，支持直通充电'],

    year:2025
    },
    {
    id: 4,
    AppleImg: 'src/images/ipadairM3(k).png',
    FeatureImg: 'src/images/M3(k).png',
    title: 'iPad Air',
    plustitle: 'M3',
    desc: ['采用新款妙控键盘', '浮式支架设计，支持直通充电'],

    year:2025
    },
    {
    id: 4,
    AppleImg: 'src/images/ipadairM3(k).png',
    FeatureImg: 'src/images/M3(k).png',
    title: 'iPad Air',
    plustitle: 'M3',
    desc: ['采用新款妙控键盘', '浮式支架设计，支持直通充电'],

    year:2025
    },
    {
    id: 4,
    AppleImg: 'src/images/ipadairM3(k).png',
    FeatureImg: 'src/images/M3(k).png',
    title: 'iPad Air',
    plustitle: 'M3',
    desc: ['采用新款妙控键盘', '浮式支架设计，支持直通充电'],

    year:2025
    },
]