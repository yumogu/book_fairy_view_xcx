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
    wx.setNavigationBarTitle({
      title: '书仙'
    })
    wx.hideTabBar()
  },
  toBook () {
    wx.navigateTo({
      url: '../viewPage/viewPage',
      success: function (res) {
      }
    })
  }
})
