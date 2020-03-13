//book-detail.js
//获取应用实例
const app = getApp()

Page({
  data: {
    detailData:{},
    addsrc: '../../images/add.png',
    updatasrc: '../../images/updata.png'
  },
  onLoad: function(options) {
    wx.setNavigationBarTitle({
      title: '书籍详情'
    })
    const eventChannel = this.getOpenerEventChannel()
    // 监听acceptDataFromOpenerPage事件，获取上一页面通过eventChannel传送到当前页面的数据
    eventChannel.on('bookDetailData', (data) => {
      this.setData({
        detailData: data.data
      })
      console.log(data)
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
  },
  readFn () {
    let that = this
    wx.navigateTo({
      url: '../viewPage/viewPage',
      success: function (res) {
        // 通过eventChannel向被打开页面传送数据
        res.eventChannel.emit('bookDetailData', { data: that.data.detailData })
      }
    })
  }
    
})