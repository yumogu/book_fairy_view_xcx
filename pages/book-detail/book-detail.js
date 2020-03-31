//book-detail.js
//获取应用实例
const app = getApp()
var util = require('../../utils/util.js');
Page({
  data: {
    bookDetail:{},
    addsrc: '../../images/add.png',
    updatasrc: '../../images/updata.png',
    catalogList: []
  },
  onLoad: function(options) {
    let that = this
    wx.setNavigationBarTitle({
      title: '书籍详情'
    })
    const eventChannel = this.getOpenerEventChannel()
    // 监听acceptDataFromOpenerPage事件，获取上一页面通过eventChannel传送到当前页面的数据
    eventChannel.on('bookDetailData', (data) => {
      this.setData({
        bookDetail: data.data
      })
    })
    util.myAjax('/api/catalogListById', {bookId: this.data.bookDetail.id} , 'POST', res => {
      this.setData({
        catalogList: res.data
      })
    })

    // p判断当前书籍是否已经加入书架
    util.myAjax('/api/bookshelf/list', {bookId: this.data.bookDetail.id} , 'POST', res => {
      console.log('/api/bookshelf/list', res)
      let addsrc = ''
      if (res.data && res.data.length > 0) {
        addsrc = '../../images/has-add.png'
      } else {
        addsrc = '../../images/add.png'
      }
      this.setData({
        addsrc
      })
    })
  },
  // 加入书架
  addsrcFn (e) {
    if (this.data.addsrc.indexOf('has') > -1) {
      wx.showToast({
        title: '您已经添加到书架啦',
        icon: 'none',
        duration: 2000
      })
      return false
    } 
    let params = this.data.bookDetail
    params.catalogId = this.data.catalogList[0].id
    params.catalogName = this.data.catalogList[0].name
    params.userId = wx.getStorageSync('mysqlUserInfo') ? wx.getStorageSync('mysqlUserInfo').id : null
    util.myAjax('/api/bookshelf/add', params , 'POST', res => {
      if ( res.resultCode === 1) {
        
        let addsrc = ''
        if (this.data.addsrc.indexOf('has') > -1) {
          addsrc = '../../images/add.png'
        } else {
          addsrc = '../../images/has-add.png'
        }
        this.setData({
          addsrc
        })

        wx.showToast({
          title: '已添加至书架',
          icon: 'none',
          duration: 5000
        })
      }
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
  readFn (e) {
    let that = this
    wx.navigateTo({
      url: '../viewPage/viewPage',
      success: function (res) {
        // 通过eventChannel向被打开页面传送数据
        res.eventChannel.emit('catalogData', { data: e.currentTarget.dataset, bookDetail: that.data.bookDetail })
      }
    })
  }
    
})