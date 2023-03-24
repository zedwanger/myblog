module.exports = {
  type: "blog",
  blogConfig: {
    category: {
      location: 2,
      text: "分类",
    },
    tag: {
      location: 3,
      text: "标签",
    },
  },
  friendLink: [
    {
      title: "午后南杂",
      desc: "Enjoy when you can, and endure when you must.",
      email: "1156743527@qq.com",
      link: "https://www.recoluan.com",
    },
    {
      title: "vuepress-theme-reco",
      desc: "A simple and beautiful vuepress Blog & Doc theme.",
      avatar: "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
      link: "https://vuepress-theme-reco.recoluan.com",
    },
  ],
  logo: "https://v1.ax1x.com/2023/03/24/02ynVV.jpg",
  search: true,
  searchMaxSuggestions: 10,
  lastUpdated: "Last Updated",
  author: "zed.wang",
  authorAvatar: "https://v1.ax1x.com/2023/03/24/02ynVV.jpg",
  record: "xxxx",
  startYear: "2017",
  subSidebar: 'auto',
  sidebarDepth: 2,
  // valine设置
  valineConfig: {
    appId: 'SVAuyxgAj1XTemP5AF9JeNR8-gzGzoHsz',
    appKey: 'tE9eTgLJhVwdsA7C5z7Ku0Fi',
    placeholder: '填写邮箱可以收到回复提醒哦！',
    verify: true, // 验证码服务
    recordIP: true,
    showComment: false
  },
};
