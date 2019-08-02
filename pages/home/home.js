//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    homeFlag: false,
    tagFlag: false,
    myFlag: true
  },
  onReady: function(options) {
    wx.hideTabBar()
  }
})
