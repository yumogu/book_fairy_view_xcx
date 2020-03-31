//index.js
//获取应用实例
const app = getApp()
var util = require('../../utils/util.js');
Page({
  data: {
    homeFlag: false,
    tagFlag: false,
    myFlag: true,
    list: [],
    catalogCurrent: {}
  },
  onReady: function(options) {
    wx.setNavigationBarTitle({
      title: '书仙'
    })
    wx.hideTabBar()
  },
  // onLoad () {
    
  // },
  onShow () {
    let userId = wx.getStorageSync('mysqlUserInfo') ? wx.getStorageSync('mysqlUserInfo').id : null
    console.log('mysqlUserInfo',  wx.getStorageSync('mysqlUserInfo'))

    util.myAjax('/api/bookshelf/list', {userId} , 'POST', res => {
      console.log(res)
      this.setData({
        list: res.data
      })
    })
    
  },
  toBook (e) {
    let that = this
    let bookdetail = e.currentTarget.dataset.bookdetail;
    bookdetail.name = bookdetail.bookName
    new Promise( (resolve, reject) => {
      util.myAjax('/api/catalogListById', {bookId: bookdetail.bookId, id: bookdetail.catalogId} , 'POST',  res => {
        console.log('---res', res)
        this.setData({
          catalogCurrent: res.data[0]
        })
        resolve(res.data)
      })
    }).then((result) => {
      console.log('====res', {result,  data: that.data.catalogCurrent, bookDetail: bookdetail })
      wx.navigateTo({
        url: '../viewPage/viewPage',
        success: function (res) {
          res.eventChannel.emit('catalogData', 
          { data: {catalogitem: that.data.catalogCurrent}, bookDetail: bookdetail  })
        }
      })
      // console.log('====res', { data: that.data.catalogCurrent, bookDetail: bookdetail })
    }).catch((reason) => {
        console.log('失败：' + reason);
    });
  }
})
