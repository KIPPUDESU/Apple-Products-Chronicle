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
    AppleImg: 'src/images/iPhone2007(k).png',
    FeatureImg: 'src/images/S5L8900(k).png',
    title: 'iPhone 2007',
    plustitle: 'S5L8900',
    desc: ['智能手机时代的开端', '一场彻底的革命,不止于手机'],

    year:2007
    },
    {
    id: 2,
    AppleImg: 'src/images/iPhone3G(k).png',
    FeatureImg: 'src/images/S5L8900(k).png',
    title: 'iPhone 3G',
    plustitle: 'S5L89G00',
    desc: ['GPS定位确定位置', 'AppStore启动Apple生态时代'],

    year:2008
    },
    {
    id: 3,
    AppleImg: 'src/images/iPhone3GS(k).png',
    FeatureImg: 'src/images/S5L8920(k).png',
    title: 'iPhone 3GS',
    plustitle: 'S5L8920',
    desc: ['原有外观的全新体验', '视频录制奠定新时代记录媒介'],

    year:2009
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