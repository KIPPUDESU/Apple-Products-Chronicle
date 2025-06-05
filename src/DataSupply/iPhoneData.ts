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
export const products: Product[] = [
  {
    id: 1,
    AppleImg: 'src/images/iPhone2007(k).png',
    FeatureImg: 'src/images/S5L8900(k).png',
    title: 'iPhone 2007',
    plustitle: 'S5L8900',
    desc: ['智能手机时代的开端', '一场彻底的革命，不止于手机'],
    year: 2007
  },
  {
    id: 2,
    AppleImg: 'src/images/iPhone3G(k).png',
    FeatureImg: 'src/images/S5L8900(k).png',
    title: 'iPhone 3G',
    plustitle: 'S5L89G00',
    desc: ['GPS定位确定位置', 'App Store启动Apple生态时代'],
    year: 2008
  },
  {
    id: 3,
    AppleImg: 'src/images/iPhone3GS(k).png',
    FeatureImg: 'src/images/S5L8920(k).png',
    title: 'iPhone 3GS',
    plustitle: 'S5L8920',
    desc: ['原有外观的全新体验', '视频录制奠定新时代记录媒介'],
    year: 2009
  },
  {
    id: 4,
    AppleImg: 'src/images/iPhone4(k).png',
    FeatureImg: 'src/images/A4(k).png',
    title: 'iPhone 4',
    plustitle: 'A4',
    desc: ['全新视网膜显示屏', 'FaceTime视频通话正式推出'],
    year: 2010
  },
  {
    id: 5,
    AppleImg: 'src/images/iPhone4S(k).png',
    FeatureImg: 'src/images/A5(k).png',
    title: 'iPhone 4S',
    plustitle: 'A5',
    desc: ['Siri智能语音助手首发', '更强大的双核处理器'],
    year: 2011
  },
  {
    id: 6,
    AppleImg: 'src/images/iPhone5(k).png',
    FeatureImg: 'src/images/A6(k).png',
    title: 'iPhone 5',
    plustitle: 'A6',
    desc: ['更大屏幕与更轻薄设计', '首次使用Lightning接口'],
    year: 2012
  },
  {
    id: 7,
    AppleImg: 'src/images/iPhone5s(k).png',
    FeatureImg: 'src/images/A7(k).png',
    title: 'iPhone 5s',
    plustitle: 'A7',
    desc: ['Touch ID指纹识别首发', '首款64位智能手机'],
    year: 2013
  },
  {
    id: 8,
    AppleImg: 'src/images/iPhone6(k).png',
    FeatureImg: 'src/images/A8(k).png',
    title: 'iPhone 6',
    plustitle: 'A8',
    desc: ['更大屏幕与弧形边框设计', 'Apple Pay移动支付推出'],
    year: 2014
  },
  {
    id: 9,
    AppleImg: 'src/images/iPhone6Plus(k).png',
    FeatureImg: 'src/images/A8(k).png',
    title: 'iPhone 6 Plus',
    plustitle: 'A8',
    desc: ['首款Plus尺寸大屏', '光学防抖相机首次登场'],
    year: 2014
  },
  {
    id: 10,
    AppleImg: 'src/images/iPhone6s(k).png',
    FeatureImg: 'src/images/A9(k).png',
    title: 'iPhone 6s',
    plustitle: 'A9',
    desc: ['3D Touch带来按压操作', 'Live Photos动态照片新体验'],
    year: 2015
  },
  {
    id: 11,
    AppleImg: 'src/images/iPhone6sPlus(k).png',
    FeatureImg: 'src/images/A9(k).png',
    title: 'iPhone 6s Plus',
    plustitle: 'A9',
    desc: ['更大屏幕与3D Touch结合', '更强大的摄像头与性能'],
    year: 2015
  },
  {
    id: 12,
    AppleImg: 'src/images/iPhoneSE(k).png',
    FeatureImg: 'src/images/A9(k).png',
    title: 'iPhone SE (第1代)',
    plustitle: 'A9',
    desc: ['经典外观回归', '小屏旗舰性能'],
    year: 2016
  },
  {
    id: 13,
    AppleImg: 'src/images/iPhone7(k).png',
    FeatureImg: 'src/images/A10(k).png',
    title: 'iPhone 7',
    plustitle: 'A10 Fusion',
    desc: ['取消3.5mm耳机孔', '双扬声器立体声体验'],
    year: 2016
  },
  {
    id: 14,
    AppleImg: 'src/images/iPhone7Plus(k).png',
    FeatureImg: 'src/images/A10(k).png',
    title: 'iPhone 7 Plus',
    plustitle: 'A10 Fusion',
    desc: ['双摄像头带来人像模式', '更大电池与更强续航'],
    year: 2016
  },
  {
    id: 15,
    AppleImg: 'src/images/iPhone8(k).png',
    FeatureImg: 'src/images/A11(k).png',
    title: 'iPhone 8',
    plustitle: 'A11 Bionic',
    desc: ['无线充电功能引入', 'True Tone视网膜显示'],
    year: 2017
  },
  {
    id: 16,
    AppleImg: 'src/images/iPhone8Plus(k).png',
    FeatureImg: 'src/images/A11(k).png',
    title: 'iPhone 8 Plus',
    plustitle: 'A11 Bionic',
    desc: ['双摄像头升级与人像光效', '大容量存储选项'],
    year: 2017
  },
  {
    id: 17,
    AppleImg: 'src/images/iPhoneX(k).png',
    FeatureImg: 'src/images/A11(k).png',
    title: 'iPhone X',
    plustitle: 'A11 Bionic',
    desc: ['全面屏与刘海设计首发', 'Face ID面部识别革新'],
    year: 2017
  },
  {
    id: 18,
    AppleImg: 'src/images/iPhoneXR(k).png',
    FeatureImg: 'src/images/A12(k).png',
    title: 'iPhone XR',
    plustitle: 'A12 Bionic',
    desc: ['液态视网膜LCD屏幕', '多彩配色引领潮流'],
    year: 2018
  },
  {
    id: 19,
    AppleImg: 'src/images/iPhoneXS(k).png',
    FeatureImg: 'src/images/A12(k).png',
    title: 'iPhone XS',
    plustitle: 'A12 Bionic',
    desc: ['OLED全面屏再升级', '更强大的双摄像头系统'],
    year: 2018
  },
  {
    id: 20,
    AppleImg: 'src/images/iPhoneXSMax(k).png',
    FeatureImg: 'src/images/A12(k).png',
    title: 'iPhone XS Max',
    plustitle: 'A12 Bionic',
    desc: ['史上最大屏幕iPhone', '更长续航与更低功耗'],
    year: 2018
  },
  {
    id: 21,
    AppleImg: 'src/images/iPhone11(k).png',
    FeatureImg: 'src/images/A13(k).png',
    title: 'iPhone 11',
    plustitle: 'A13 Bionic',
    desc: ['双摄像头广角与超广角', '夜间模式拍摄效果大提升'],
    year: 2019
  },
  {
    id: 22,
    AppleImg: 'src/images/iPhone11Pro(k).png',
    FeatureImg: 'src/images/A13(k).png',
    title: 'iPhone 11 Pro',
    plustitle: 'A13 Bionic',
    desc: ['三摄系统带来专业拍摄', 'Super Retina XDR显示屏'],
    year: 2019
  },
  {
    id: 23,
    AppleImg: 'src/images/iPhone11ProMax(k).png',
    FeatureImg: 'src/images/A13(k).png',
    title: 'iPhone 11 Pro Max',
    plustitle: 'A13 Bionic',
    desc: ['Pro顶级三摄与超大屏', '更持久电池与更快充电'],
    year: 2019
  },
  {
    id: 24,
    AppleImg: 'src/images/iPhone12(k).png',
    FeatureImg: 'src/images/A14(k).png',
    title: 'iPhone 12',
    plustitle: 'A14 Bionic',
    desc: ['5G网络支持', 'MagSafe磁吸配件创新'],
    year: 2020
  },
  {
    id: 25,
    AppleImg: 'src/images/iPhone12Pro(k).png',
    FeatureImg: 'src/images/A14(k).png',
    title: 'iPhone 12 Pro',
    plustitle: 'A14 Bionic',
    desc: ['LiDAR激光雷达扫描仪', '专业级视频拍摄功能'],
    year: 2020
  },
  {
    id: 26,
    AppleImg: 'src/images/iPhone12ProMax(k).png',
    FeatureImg: 'src/images/A14(k).png',
    title: 'iPhone 12 Pro Max',
    plustitle: 'A14 Bionic',
    desc: ['更大传感器与传感器位移防抖', '摄像体验再度提升'],
    year: 2020
  },
  {
    id: 27,
    AppleImg: 'src/images/iPhone13(k).png',
    FeatureImg: 'src/images/A15(k).png',
    title: 'iPhone 13',
    plustitle: 'A15 Bionic',
    desc: ['更高刷新率ProMotion', '小刘海设计与更长续航'],
    year: 2021
  },
  {
    id: 28,
    AppleImg: 'src/images/iPhone13Pro(k).png',
    FeatureImg: 'src/images/A15(k).png',
    title: 'iPhone 13 Pro',
    plustitle: 'A15 Bionic',
    desc: ['ProMotion自适应120Hz', '三摄系统摄影风格功能'],
    year: 2021
  },
  {
    id: 29,
    AppleImg: 'src/images/iPhone13ProMax(k).png',
    FeatureImg: 'src/images/A15(k).png',
    title: 'iPhone 13 Pro Max',
    plustitle: 'A15 Bionic',
    desc: ['超大屏幕ProMotion体验', '影像传感器位移防抖'],
    year: 2021
  },
    {
    id: 30,
    AppleImg: 'src/images/iPhone 16 pro(k).png',
    FeatureImg: 'src/images/A18 PRO(k).png',
    title: 'iPhone 16 Pro',
    plustitle: 'A18 Pro',
    desc: ['48MP超广角摄像头', 'A18 Pro芯片为极致性能赋能'],

    year:2025
    },
]