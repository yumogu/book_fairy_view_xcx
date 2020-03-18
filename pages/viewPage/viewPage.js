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
    text:
      '台灣的著名作家──三毛 1943年3月26日出生於重慶，浙江省定海縣人。本名為陳懋平，1946年改名陳平。 筆名『三毛』更不知出自何處，只在她的《鬧學記》一篇序文中提及『三毛』二字暗藏一個《易經》的卦象，至於這卦象究竟隱藏何種玄機，序文中並沒有進一步的交代。 三毛的母親繆進蘭曾在〈我的女兒，大家的三毛〉這篇文章中，提及四個兄弟姊妹裡，次女三毛的性格最為特行卓立、不依常規，以及不能忍受虛假，因此父母要在她身邊看守著每一腳步是否踏穩。 另外，有讀者認為『流浪』才是三毛真正的名字，無論是她的遺作、她的遊歷和她心靈情感的轉折，始終透著一點點浪跡天涯的意味。 1973年7月，三毛與荷西在沙漠小鎮阿尤恩結婚。與荷西一道生活的歲月，三毛的文章充滿歡 三毛的文章充滿歡。與荷西一道生活的歲月，三毛的文章充滿歡.與荷西一道生活的歲月，三毛的文章充滿歡。台灣的著名作家──三毛 1943年3月26日出生於重慶，浙江省定海縣人。本名為陳懋平，1946年改名陳平。 筆名『三毛』更不知出自何處，只在她的《鬧學記》一篇序文中提及『三毛』二字暗藏一個《易經》的卦象，至於這卦象究竟隱藏何種玄機，序文中並沒有進一步的交代。 三毛的母親繆進蘭曾在〈我的女兒，大家的三毛〉這篇文章中，提及四個兄弟姊妹裡，次女三毛的性格最為特行卓立、不依常規，以及不能忍受虛假，因此父母要在她身邊看守著每一腳步是否踏穩。 另外，有讀者認為『流浪』才是三毛真正的名字，無論是她的遺作、她的遊歷和她心靈情感的轉折，始終透著一點點浪跡天涯的意味。 1973年7月，三毛與荷西在沙漠小鎮阿尤恩結婚。與荷西一道生活的歲月，三毛的文章充滿歡 三毛的文章充滿歡。與荷西一道生活的歲月，三毛的文章充滿歡.與荷西一道生活的歲月，三毛的文章充滿歡。台灣的著名作家──三毛 1943年3月26日出生於重慶，浙江省定海縣人。本名為陳懋平，1946年改名陳平。 筆名『三毛』更不知出自何處，只在她的《鬧學記》一篇序文中提及『三毛』二字暗藏一個《易經》的卦象，至於這卦象究竟隱藏何種玄機，序文中並沒有進一步的交代。 三毛的母親繆進蘭曾在〈我的女兒，大家的三毛〉這篇文章中，提及四個兄弟姊妹裡，次女三毛的性格最為特行卓立、不依常規，以及不能忍受虛假，因此父母要在她身邊看守著每一腳步是否踏穩。 另外，有讀者認為『流浪』才是三毛真正的名字，無論是她的遺作、她的遊歷和她心靈情感的轉折，始終透著一點點浪跡天涯的意味。 1973年7月，三毛與荷西在沙漠小鎮阿尤恩結婚。與荷西一道生活的歲月，三毛的文章充滿歡 三毛的文章充滿歡。與荷西一道生活的歲月，三毛的文章充滿歡.與荷西一道生活的歲月，三毛的文章充滿歡。台灣的著名作家──三毛 1943年3月26日出生於重慶，浙江省定海縣人。本名為陳懋平，1946年改名陳平。 筆名『三毛』更不知出自何處，只在她的《鬧學記》一篇序文中提及『三毛』二字暗藏一個《易經》的卦象，至於這卦象究竟隱藏何種玄機，序文中並沒有進一步的交代。 三毛的母親繆進蘭曾在〈我的女兒，大家的三毛〉這篇文章中，提及四個兄弟姊妹裡，次女三毛的性格最為特行卓立、不依常規，以及不能忍受虛假，因此父母要在她身邊看守著每一腳步是否踏穩。 另外，有讀者認為『流浪』才是三毛真正的名字，無論是她的遺作、她的遊歷和她心靈情感的轉折，始終透著一點點浪跡天涯的意味。 1973年7月，三毛與荷西在沙漠小鎮阿尤恩結婚。與荷西一道生活的歲月，三毛的文章充滿歡 三毛的文章充滿歡。與荷西一道生活的歲月，三毛的文章充滿歡.與荷西一道生活的歲月，三毛的文章充滿歡。台灣的著名作家──三毛 1943年3月26日出生於重慶，浙江省定海縣人。本名為陳懋平，1946年改名陳平。 筆名『三毛』更不知出自何處，只在她的《鬧學記》一篇序文中提及『三毛』二字暗藏一個《易經》的卦象，至於這卦象究竟隱藏何種玄機，序文中並沒有進一步的交代。 三毛的母親繆進蘭曾在〈我的女兒，大家的三毛〉這篇文章中，提及四個兄弟姊妹裡，次女三毛的性格最為特行卓立、不依常規，以及不能忍受虛假，因此父母要在她身邊看守著每一腳步是否踏穩。 另外，有讀者認為『流浪』才是三毛真正的名字，無論是她的遺作、她的遊歷和她心靈情感的轉折，始終透著一點點浪跡天涯的意味。 1973年7月，三毛與荷西在沙漠小鎮阿尤恩結婚。與荷西一道生活的歲月，三毛的文章充滿歡 三毛的文章充滿歡。與荷西一道生活的歲月，三毛的文章充滿歡.與荷西一道生活的歲月，三毛的文章充滿歡。台灣的著名作家──三毛 1943年3月26日出生於重慶，浙江省定海縣人。本名為陳懋平，1946年改名陳平。 筆名『三毛』更不知出自何處，只在她的《鬧學記》一篇序文中提及『三毛』二字暗藏一個《易經》的卦象，至於這卦象究竟隱藏何種玄機，序文中並沒有進一步的交代。 三毛的母親繆進蘭曾在〈我的女兒，大家的三毛〉這篇文章中，提及四個兄弟姊妹裡，次女三毛的性格最為特行卓立、不依常規，以及不能忍受虛假，因此父母要在她身邊看守著每一腳步是否踏穩。 另外，有讀者認為『流浪』才是三毛真正的名字，無論是她的遺作、她的遊歷和她心靈情感的轉折，始終透著一點點浪跡天涯的意味。 1973年7月，三毛與荷西在沙漠小鎮阿尤恩結婚。與荷西一道生活的歲月，三毛的文章充滿歡 三毛的文章充滿歡。與荷西一道生活的歲月，三毛的文章充滿歡.與荷西一道生活的歲月，三毛的文章充滿歡。台灣的著名作家──三毛 1943年3月26日出生於重慶，浙江省定海縣人。本名為陳懋平，1946年改名陳平。 筆名『三毛』更不知出自何處，只在她的《鬧學記》一篇序文中提及『三毛』二字暗藏一個《易經》的卦象，至於這卦象究竟隱藏何種玄機，序文中並沒有進一步的交代。 三毛的母親繆進蘭曾在〈我的女兒，大家的三毛〉這篇文章中，提及四個兄弟姊妹裡，次女三毛的性格最為特行卓立、不依常規，以及不能忍受虛假，因此父母要在她身邊看守著每一腳步是否踏穩。 另外，有讀者認為『流浪』才是三毛真正的名字，無論是她的遺作、她的遊歷和她心靈情感的轉折，始終透著一點點浪跡天涯的意味。 1973年7月，三毛與荷西在沙漠小鎮阿尤恩結婚。與荷西一道生活的歲月，三毛的文章充滿歡 三毛的文章充滿歡。與荷西一道生活的歲月，三毛的文章充滿歡.與荷西一道生活的歲月，三毛的文章充滿歡。',
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
      // return false
    }
    console.log(tempCurrentPage)
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
  }
  
})
