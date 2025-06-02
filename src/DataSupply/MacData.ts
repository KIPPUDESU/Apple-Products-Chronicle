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
    id: 3,
    AppleImg: 'src/images/iMac M4(k).png',
    FeatureImg: 'src/images/M4(k).png',
    title: 'iMac',
    plustitle: 'M4',
    desc: ['更低调的浅色七彩', '像素皆因神经网络而焕然新生'],

    year:2024
    },
    {
    id: 3,
    AppleImg: 'src/images/iMac M4(k).png',
    FeatureImg: 'src/images/M4(k).png',
    title: 'iMac',
    plustitle: 'M4',
    desc: ['更低调的浅色七彩', '像素皆因神经网络而焕然新生'],

    year:2024
    },
    {
    id: 3,
    AppleImg: 'src/images/iMac M4(k).png',
    FeatureImg: 'src/images/M4(k).png',
    title: 'iMac',
    plustitle: 'M4',
    desc: ['更低调的浅色七彩', '像素皆因神经网络而焕然新生'],

    year:2024
    },
    {
    id: 3,
    AppleImg: 'src/images/iMac M4(k).png',
    FeatureImg: 'src/images/M4(k).png',
    title: 'iMac',
    plustitle: 'M4',
    desc: ['更低调的浅色七彩', '像素皆因神经网络而焕然新生'],

    year:2024
    },
    {
    id: 3,
    AppleImg: 'src/images/iMac M4(k).png',
    FeatureImg: 'src/images/M4(k).png',
    title: 'iMac',
    plustitle: 'M4',
    desc: ['更低调的浅色七彩', '像素皆因神经网络而焕然新生'],

    year:2024
    },
    {
    id: 3,
    AppleImg: 'src/images/iMac M4(k).png',
    FeatureImg: 'src/images/M4(k).png',
    title: 'iMac',
    plustitle: 'M4',
    desc: ['更低调的浅色七彩', '像素皆因神经网络而焕然新生'],

    year:2024
    },
]