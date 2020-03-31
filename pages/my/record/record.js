//record.js
//获取应用实例
const app = getApp()
var util = require('../../../utils/util.js');
Page({
  data: {
    userInfo: {},
    bookList: []
  },
  onLoad: function(options) {
    wx.setNavigationBarTitle({
      title: '阅读记录'
    })
    this.setData({
      userInfo: app.globalData.userInfo,
    })
  },
  back: function() {
    wx.navigateBack()
  },
  onShow () {
    this.setData({
      bookList: wx.getStorageSync('recordList') || []
    })
  },
  goFn (e) {
    let that = this
    let bookdetail = e.currentTarget.dataset.bookdetail;
    bookdetail.name = bookdetail.bookName
    new Promise( (resolve, reject) => {
      util.myAjax('/api/catalogListById', {bookId: bookdetail.bookId, id: bookdetail.catalogId} , 'POST',  res => {
        this.setData({
          catalogCurrent: res.data[0]
        })
        resolve(res.data)
      })
    }).then((result) => {
      wx.navigateTo({
        url: '../../viewPage/viewPage',
        success: function (res) {
          res.eventChannel.emit('catalogData', 
          { data: {catalogitem: that.data.catalogCurrent}, bookDetail: bookdetail })
        }
      })
    }).catch((reason) => {
    });
  }
})
