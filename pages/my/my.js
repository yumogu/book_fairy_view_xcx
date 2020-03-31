//index.js
//获取应用实例
const app = getApp()
var util = require('../../utils/util.js');
Page({
  data: {
    homeFlag: false,
    tagFlag: false,
    myFlag: true,
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  onLoad: function(options) {
    wx.setNavigationBarTitle({
      title: '书生'
    })
    wx.hideTabBar()
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function (e) {
    if (e.detail.userInfo) {
      app.globalData.userInfo = e.detail.userInfo
      this.setData({
        userInfo: e.detail.userInfo,
        hasUserInfo: true
      })
      util.myAjax('/api/user', {userInfo: e.detail.userInfo} , 'POST', res => {
        console.log('/api/user', res)
        wx.setStorage({
          key: "mysqlUserInfo",
          data: res.data
        })
      })
    }
  },
  goFn: function (e) {
    if (app.globalData.userInfo || e.currentTarget.dataset.url.indexOf('/about/about') > -1) {
      wx.navigateTo({
        url: e.currentTarget.dataset.url
      })
    } else {
      wx.showToast({
        title: '请先登陆',
        icon: 'none',
        duration: 2000
      })
      // alert('请先登陆')
    }
    
  }
})
