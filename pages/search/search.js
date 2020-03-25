//tag.js
//获取应用实例
const app = getApp()
var util = require('../../utils/util.js');

Page({
  data: {
    bookList: [
    ],
    page: 1,
    rows: 10,
    name: '',
    lastName: '',
    flag: true,
    count: 0
  },
  onLoad: function(options) {
    wx.setNavigationBarTitle({
      title: '搜索'
    })
    this.setData({
      search: this.search.bind(this)
    })
    // this.getBooksListFn()
  },
  goFn: function (e) {
    console.log(e.currentTarget)
    let query = e.currentTarget.dataset['item'];

    // if (app.globalData.userInfo || e.currentTarget.dataset.url.indexOf('/about/about') > -1) {
      wx.navigateTo({
        url: '../book-detail/book-detail',
        success: function(res) {
          // 通过eventChannel向被打开页面传送数据
          res.eventChannel.emit('bookDetailData', { data: query })
        }
      })
    // } else {
    //   wx.showToast({
    //     title: '请先登陆',
    //     icon: 'none',
    //     duration: 2000
    //   })
    // }
    
  },
  getBooksListFn () {
    util.myAjax('/api/booksList', {
      page: this.data.page,
      rows: this.data.rows,
      name: this.data.name
    } , 'POST', res => {
      console.log('res.data.length', res.data.length, res.data && res.data.length === 0)
      if (res.data && res.data.rows.length === 0) {
        this.setData({
          flag: false
        })
      }
      this.setData({
        count: res.data.count
      })
      let tempArr = this.data.bookList
      if (this.data.page === 1) {
        this.setData({
          bookList: res.data.rows
        })
      } else {
        this.setData({
          bookList: tempArr.concat(res.data.rows)
        })
      }
    })
  },
  search (value) {

    this.setData({
      lastName: this.data.name,
      name: value
    })
    if (this.data.lastName !== this.data.name) {
      this.setData({
        page: 1
      })
    }
    return new Promise((resolve, reject) => {
      this.getBooksListFn()
      resolve()
    })
  },
  onReachBottom () {
    console.log('上拉加载')
    let tempPage = this.data.page + 1
    this.setData({
      page: tempPage
    })
    console.log(this.data.page)
    console.log('this.data.flag', this.data.flag, this.data.flag === false)
    if (this.data.flag === false) {
      wx.showToast({
        title: '没有更多了',
        icon: 'none',
        duration: 2000
      })
      return false
    }
    this.getBooksListFn()
  },
})