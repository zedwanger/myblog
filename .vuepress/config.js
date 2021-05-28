const path = require("path");
const themeConfig = require("./config/theme/");
module.exports = {
  title: "龙战于野",
  // description: "",
  dest: "public",
  base: "/myblog/",
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.join(__dirname, "public", "assets"),
      },
    },
  },
  head: [
    [
      "link",
      {
        rel: "icon",
        href: "https://cdn.jsdelivr.net/gh/zedwanger/pic-bed/img/favicon.ico",
      },
    ],
    [
      "meta",
      {
        name: "viewport",
        content: "width=device-width,initial-scale=1,user-scalable=no",
      },
    ],
  ],
  theme: "reco",
  themeConfig: themeConfig,
  // locales: {
  // '/': {
  //   lang: 'zh-CN', // 将会被设置为 <html> 的 lang 属性
  //   title: "ZED",
  //   description: '一款简洁而优雅的 vuepress 博客 & 文档 主题。'
  // },
  // '/en/': {
  //   lang: 'en-US',
  //   title: "vuepress-theme-reco",
  //   description: 'A simple and beautiful vuepress Blog & Doc theme.'
  // }
  // },
  markdown: {
    lineNumbers: true,
  },
  plugins: {
    //一键复制代码插件: "vuepress-plugin-code-copy": "^1.0.6",
    "vuepress-plugin-code-copy": true,
    "dynamic-title": {
      showIcon: "https://cdn.jsdelivr.net/gh/zedwanger/pic-bed/img/favicon.ico",
      showText: "(/≧▽≦/)咦！又好了！",
      hideIcon: "/failure.ico",
      hideText: "(●—●)喔哟，崩溃啦！",
      recoverTime: 2000,
    },
    "ribbon-animation": {
      size: 90, // 默认数据
      opacity: 0.3, //  透明度
      zIndex: 1, //  层级
      opt: {
        // 色带HSL饱和度
        colorSaturation: "80%",
        // 色带HSL亮度量
        colorBrightness: "60%",
        // 带状颜色不透明度
        colorAlpha: 0.65,
        // 在HSL颜色空间中循环显示颜色的速度有多快
        colorCycleSpeed: 6,
        // 从哪一侧开始Y轴 (top|min, middle|center, bottom|max, random)
        verticalPosition: "center",
        // 到达屏幕另一侧的速度有多快
        horizontalSpeed: 200,
        // 在任何给定时间，屏幕上会保留多少条带
        ribbonCount: 2,
        // 添加笔划以及色带填充颜色
        strokeSize: 0,
        // 通过页面滚动上的因子垂直移动色带
        parallaxAmount: -0.5,
        // 随着时间的推移，为每个功能区添加动画效果
        animateSections: true,
      },
      ribbonShow: false, //  点击彩带  true显示  false为不显示
      ribbonAnimationShow: true, // 滑动彩带
    },
    "sakura": {
      num: 30, // 默认数量
      show: true,
      zIndex: 2,
      img: {
        replace: false, // false 默认图 true 换图 需要填写httpUrl地址
        httpUrl: "http://www.zpzpup.com/assets/image/sakura.png", // 绝对路径
      },
    },
  },
};
