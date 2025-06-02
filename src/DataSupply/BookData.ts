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
]