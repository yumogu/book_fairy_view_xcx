//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    userInfo: {}
  },
  onLoad: function(options) {
    wx.setNavigationBarTitle({
      title: '个人资料'
    })
    this.setData({
      userInfo: app.globalData.userInfo
    })
  }
})
