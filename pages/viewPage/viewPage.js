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
    currentPage: 0,
    catalogList: [],

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
      console.log('**********************onLoad=============currentPage', data.bookDetail)

      this.setData({
        catalogData: data.data.catalogitem,
        bookDetail: data.bookDetail,
        currentPage: data.bookDetail.currentPage || 0
      })
      console.log('**********************onLoad=============currentPage',this.data.currentPage)
    })
    this.getCatalogcontent(this.data.catalogData.bookId, this.data.catalogData.id)
    if (this.data.beforeCatalogcontent.length === 0) {
      this.getCatalogcontent(this.data.catalogData.bookId, this.data.catalogData.id - 1, 'beforeCatalogcontent')
    }
    if (this.data.afterCatalogcontent.length === 0) {
      this.getCatalogcontent(this.data.catalogData.bookId, this.data.catalogData.id + 1, 'afterCatalogcontent')
    }
    this.catalogListById(this.data.catalogData.bookId)
    
    // 进来之后将当前章节信息添加到历史记录
    this.addHistory()
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

  // 上一章、上一页
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
    }
    // 翻页之后将当前章节信息添加到历史记录
    this.addHistory()
    this.setData({
      currentPage: tempCurrentPage
    })
  },

  // 下一章 下一页
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
    this.setData({
      currentPage: tempCurrentPage
    })
    // 翻页之后将当前页面和章节信息添加到历史记录
    this.addHistory()
  },
  // 根据bookId，查询内容
  getCatalogcontent (bookId, catalogId, ajaxpage) {
    util.myAjax('/api/catalogcontent', {bookId, catalogId} , 'POST', res => {
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
    })  
  },
  // 根据bookId 和 章节Id 查询当前章节名称
  catalogListById (bookId, id) {
    util.myAjax('/api/catalogListById', {bookId, id} , 'POST', res => {
      if (id) {
        // 判断是查询一章的目录，还是查询目录列表
        this.setData({
          catalogData: res.data[0]
        })
      } else {
        this.setData({
          catalogList: res.data
        })
      }
      
    })
  },
  slideUpFn (e){
    console.log(1111)
    this.selectComponent("#slideUp").slideUp()
    // console.log(e.detail)// 自定义组件触发事件时提供的detail对象
  },
  onslideCloseEvent (e) {
    this.setData({
      catalogData: e.detail
    })
    // 初始化上一章内容缓存和下一章内容缓存，以及当前页数
    this.setData({
      beforeCatalogcontent: [],
      afterCatalogcontent: [],
      currentPage: 0
    })
    console.log('this.data.currentPage==================', this.data.currentPage)
    this.getCatalogcontent(this.data.catalogData.bookId, this.data.catalogData.id)
    if (this.data.beforeCatalogcontent.length === 0) {
      this.getCatalogcontent(this.data.catalogData.bookId, this.data.catalogData.id - 1, 'beforeCatalogcontent')
    }
    if (this.data.afterCatalogcontent.length === 0) {
      this.getCatalogcontent(this.data.catalogData.bookId, this.data.catalogData.id + 1, 'afterCatalogcontent')
    }
    console.log('onslideCloseEvent=============', e.detail)
    // 翻页之后将当前章节信息添加到历史记录
    this.addHistory()
  },
  // 加入书架
  addTag (e) {
    let params = this.data.bookDetail
    params.catalogId = this.data.catalogData.id
    params.catalogName = this.data.catalogData.name
    params.id = this.data.catalogData.bookId,
    params.currentPage = this.data.currentPage
    params.userId = wx.getStorageSync('mysqlUserInfo') ? wx.getStorageSync('mysqlUserInfo').id : null
    util.myAjax('/api/bookshelf/add', params , 'POST', res => {
      if ( res.resultCode === 1) {
        wx.showToast({
          title: '添加成功',
          icon: 'none',
          duration: 5000
        })
      }
    })
  },
  // 添加到历史记录
  addHistory () {
    let params = this.data.bookDetail
    params.catalogId = this.data.catalogData.id
    params.catalogName = this.data.catalogData.name
    params.id = this.data.catalogData.bookId
    params.currentPage = this.data.currentPage
    console.log('currenPAge===============', params.currentPage )
    // 获取当前历史记录
    let currentRecordList = wx.getStorageSync('recordList') || []
    if (currentRecordList.length > 0) {
      currentRecordList.map( (v, i) => {
        // console.log('v.bookId === params.id',v.bookId, params.id, v, v.bookId === params.id)
        if (v.id === params.id ) {
          currentRecordList.splice(i, 1)
          // currentRecordList[i]
        }
      })
    }
    currentRecordList.unshift(params)
    // console.log('currentRecordList***********************', currentRecordList)
    if (currentRecordList.length > 10) {
      currentRecordList.arr.splice(10, currentRecordList.length - 10)
    }
    wx.setStorageSync('recordList', currentRecordList)
  }
})
