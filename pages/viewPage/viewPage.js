//index.js
//获取应用实例
const app = getApp()
var util = require('../../utils/util.js');
Page({
  data: {
    bookDetail: {
      bookName: '撒哈拉的故事',
      chapterName: '第一章 撒哈拉的故事',
      total: '31',
      progress: '1',
      author: '三毛'
    },
    catalogcontent: [], // 本章内容
    beforeCatalogcontent:[], // 上一章内容
    afterCatalogcontent: [], // 下一章内容
    catalogData: {},
    text:'',
    fontSize: 14,
    currentPage: 0
  },
  onReady: function(options) {
    wx.setNavigationBarTitle({
      title: this.data.bookDetail.name
    })
  },
  onLoad () {
    const eventChannel = this.getOpenerEventChannel()
    // 监听bookDetailData事件，获取上一页面通过eventChannel传送到当前页面的数据
    eventChannel.on('catalogData', (data) => {
      this.setData({
        catalogData: data.data.catalogitem,
        bookDetail: data.bookDetail
      })
      console.log(data)
    })
    this.getCatalogcontent(this.data.catalogData.bookId, this.data.catalogData.id)
    if (this.data.beforeCatalogcontent.length === 0) {
      this.getCatalogcontent(this.data.catalogData.bookId, this.data.catalogData.id - 1, 'beforeCatalogcontent')
    }
    if (this.data.afterCatalogcontent.length === 0) {
      this.getCatalogcontent(this.data.catalogData.bookId, this.data.catalogData.id + 1, 'afterCatalogcontent')
    }
  },
  // 缩小字体
  subFontSize: function() {
    if (this.data.fontSize <= 12) {
      wx.showToast({
        title: '字体不能再小了哦',
        icon: 'none',
        duration: 2000
      })
      return false
    }
    let currentFontSize = this.data.fontSize - 1
    this.setData({
      fontSize: currentFontSize
    })
  },
  // 增加字体
  addFontSize: function() {
    if (this.data.fontSize >= 40) {
      wx.showToast({
        title: '字体不能再大了哦',
        icon: 'none',
        duration: 2000
      })
      return false
    }
    let currentFontSize = this.data.fontSize + 1
    this.setData({
      fontSize: currentFontSize
    })
    console.log(this.data.fontSize)
  },
  beforeFn (e) {
    let tempCurrentPage = this.data.currentPage - 1
    if (e.currentTarget.dataset.page <= 0) {
      if (this.data.beforeCatalogcontent.length === 0 ) {
        wx.showToast({
          title: '已经是第一章了',
          icon: 'none',
          duration: 2000
        })
        return false
      }
      this.setData({
        afterCatalogcontent: JSON.parse(JSON.stringify(this.data.catalogcontent)),
        catalogcontent: JSON.parse(JSON.stringify(this.data.beforeCatalogcontent)),
        beforeCatalogcontent: []
      })
      this.getCatalogcontent(this.data.catalogData.bookId, this.data.catalogcontent[0].catalogId - 1, 'beforeCatalogcontent')
      tempCurrentPage = this.data.catalogcontent.length - 1

      this.catalogListById(this.data.catalogData.bookId, this.data.catalogcontent[0].catalogId)
      // return false
    }
    // let a = this.data.catalogListById
    // console.log(a)
    // console.log(tempCurrentPage)
    this.setData({
      currentPage: tempCurrentPage
    })
  },
  nextFn (e) {
    let tempCurrentPage = this.data.currentPage + 1
    if (e.currentTarget.dataset.page >= this.data.catalogcontent.length - 1) {
      if (this.data.afterCatalogcontent.length === 0 ) {
        wx.showToast({
          title: '已经是最后一页了',
          icon: 'none',
          duration: 2000
        })
        return false
      }
      this.setData({
        beforeCatalogcontent: JSON.parse(JSON.stringify(this.data.catalogcontent)),
        catalogcontent: JSON.parse(JSON.stringify(this.data.afterCatalogcontent)),
        afterCatalogcontent: []
      })
      this.getCatalogcontent(this.data.catalogData.bookId, this.data.catalogcontent[0].catalogId + 1, 'afterCatalogcontent')
      tempCurrentPage = this.data.catalogcontent[0].num
      this.catalogListById(this.data.catalogData.bookId, this.data.catalogcontent[0].catalogId) 
      // return false
    }
    console.log(tempCurrentPage)
    this.setData({
      currentPage: tempCurrentPage
    })
  },
  // 根据bookId，查询内容
  getCatalogcontent (bookId, catalogId, ajaxpage) {
    util.myAjax('/api/catalogcontent', {bookId, catalogId} , 'POST', res => {
      // res.data.map((v) => {
      //   v.content.replace(/<br\/>/g, "\n")
      // })
      // res.data[0].content.replace(/'初夏'/g, "测试")
      // console.log(res.data, res.data[0])
      // let tempPage = 0
      // if (res.data.length > 0 && ajaxpage === 'beforeCatalogcontent') {
      //   tempPage = res.data.length - 1
      // } if (res.data.length === 0 && ajaxpage === 'beforeCatalogcontent') {
      //   tempPage  = this.data.catalogcontent.length - 1
      // } else {
      //   tempPage = res.data[0].num
      // }
      // let catalogcontent = []
      if (ajaxpage === 'afterCatalogcontent') {
        this.setData({
          afterCatalogcontent: res.data
        })
      } else if (ajaxpage === 'beforeCatalogcontent') {
        this.setData({
          beforeCatalogcontent: res.data
        })
      } else {
        this.setData({
          catalogcontent: res.data
        })
      }
      // this.setData({
      //   currentPage: tempPage
      // })
      // console.log('setData', this.data)
    })  
  },
  // 根据bookId 和 章节Id 查询当前章节名称
  catalogListById (bookId, id) {
    util.myAjax('/api/catalogListById', {bookId, id} , 'POST', res => {
      console.log('/api/catalogListById', res)
      this.setData({
        catalogData: res.data[0]
      })
    })
  }
  
  
})
