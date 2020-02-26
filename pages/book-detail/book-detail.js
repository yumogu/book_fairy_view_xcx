//book-detail.js
//获取应用实例
const app = getApp()

Page({
  data: {
    addsrc: '../../images/add.png',
    updatasrc: '../../images/updata.png'
  },
  onLoad: function(options) {
    wx.setNavigationBarTitle({
      title: '书籍详情'
    })
  },
  addsrcFn (e) {
    let addsrc = ''
    if (this.data.addsrc.indexOf('has') > -1) {
      addsrc = '../../images/add.png'
    } else {
      addsrc = '../../images/has-add.png'
    }
    this.setData({
      addsrc
    })
  },
  updatasrcFn (e) {
    let updatasrc = ''
    if (this.data.updatasrc.indexOf('has') > -1) {
      updatasrc = '../../images/updata.png'
    } else {
      updatasrc = '../../images/has-updata.png'
    }
    this.setData({
      updatasrc  
    })
  }
    
})