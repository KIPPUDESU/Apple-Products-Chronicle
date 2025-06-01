// 定义数组类型
export interface Product {
  id: number
  categoryImg: string
  categoryTitle: string
  plusTitle: string
}

// 导出一个P类型的数组
export const products : Product[] = [
    {
    id: 1,
    categoryImg: 'src/images/iPhone(k).png',
    categoryTitle: 'iPhone',
    plusTitle: '悉心设计，动心更称心。',
    },
    {
    id: 2,
    categoryImg: 'src/images/iPad(k).png',
    categoryTitle: 'iPad',
    plusTitle: '各种妙用集一身。',
    },
    {
    id: 4,
    categoryImg: 'src/images/AppleWatch(k).png',
    categoryTitle: 'Apple Watch',
    plusTitle: '健康生活的好拍档。',
    },
    {
    id: 2,
    categoryImg: 'src/images/macbook(k).png',
    categoryTitle: 'MacBook',
    plusTitle: '身轻身手快。',
    },
    {
    id: 5,
    categoryImg: 'src/images/Mac(k).png',
    categoryTitle: 'Mac',
    plusTitle: '灵活多用处处对口。',
    },
    {
    id: 6,
    categoryImg: 'src/images/VisionPro(k).png',
    categoryTitle: 'Vision Pro',
    plusTitle: '打开娱乐的新维度。',
    },
]