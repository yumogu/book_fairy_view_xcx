//tag.js
//获取应用实例
const app = getApp()
var util = require('../../utils/util.js');
Page({
  data: {
    homeFlag: false,
    tagFlag: false,
    myFlag: true,
    page: 1,
    rows: 10,
    type: [],
    bookList: [
    ],
    typeList: []
  },
  onLoad: function(options) {
    wx.setNavigationBarTitle({
      title: '书库'
    })
    wx.hideTabBar()
    util.myAjax('/api/typeList', {} , 'POST', res => {
      let tempObj = res.data
      tempObj.map((v, i) => {
        v.selected = false
        v.typeStr = v.type_str
        v.index = v.id
      })
      this.setData({
        typeList: tempObj
      })
    })
    this.getBooksListFn()

  },
  checkboxChange (e) {
    let string = "typeList["+e.target.dataset.index+"].selected"
    this.setData({
        [string]: !this.data.typeList[e.target.dataset.index].selected
    })
    let detailValue = this.data.typeList.filter(it => it.selected).map(it => it.typeStr)
    this.setData({
      page: 1,
      type: detailValue
    })
    this.getBooksListFn()
    console.log(detailValue, this.data.type)
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
  searchFn () {
    wx.navigateTo({
      url: '../search/search'
    })
  },
  getBooksListFn () {
    util.myAjax('/api/booksList', {
      page: this.data.page,
      rows: this.data.rows,
      type: this.data.type
    } , 'POST', res => {
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
  onReachBottom () {
    console.log('上拉加载')
    let tempPage = this.data.page + 1
    this.setData({
      page: tempPage
    })
    console.log(this.data.page)
    this.getBooksListFn()
  },
})