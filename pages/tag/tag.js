//tag.js
//获取应用实例
const app = getApp()
var util = require('../../utils/util.js');
Page({
  data: {
    homeFlag: false,
    tagFlag: false,
    myFlag: true,
    bookList: [
      {
        bookName: '追风筝的人',
        bookImgUrl:
          'https://ae01.alicdn.com/kf/He8394015d77944f19d085f9062711172U.png'
      },
      {
        bookName: 'c测试',
        bookImgUrl:
          'https://ae01.alicdn.com/kf/He8394015d77944f19d085f9062711172U.png'
      },
      {
        bookName: '侧测试',
        bookImgUrl:
          'https://ae01.alicdn.com/kf/He8394015d77944f19d085f9062711172U.png'
      },
      {
        bookName: '侧测试',
        bookImgUrl:
          'https://ae01.alicdn.com/kf/He8394015d77944f19d085f9062711172U.png'
      },
      {
        bookName: '侧测试',
        bookImgUrl:
          'https://ae01.alicdn.com/kf/He8394015d77944f19d085f9062711172U.png'
      },
      {
        bookName: '侧测试',
        bookImgUrl:
          'https://ae01.alicdn.com/kf/He8394015d77944f19d085f9062711172U.png'
      },
      {
        bookName: '侧测试',
        bookImgUrl:
          'https://ae01.alicdn.com/kf/He8394015d77944f19d085f9062711172U.png'
      },
      {
        bookName: '侧测试',
        bookImgUrl:
          'https://ae01.alicdn.com/kf/He8394015d77944f19d085f9062711172U.png'
      },
      {
        bookName: '侧测试',
        bookImgUrl:
          'https://ae01.alicdn.com/kf/He8394015d77944f19d085f9062711172U.png'
      },
      {
        bookName: '侧测试',
        bookImgUrl:
          'https://ae01.alicdn.com/kf/He8394015d77944f19d085f9062711172U.png'
      },
      {
        bookName: '侧测试',
        bookImgUrl:
          'https://ae01.alicdn.com/kf/He8394015d77944f19d085f9062711172U.png'
      },
      {
        bookName: '侧测试',
        bookImgUrl:
          'https://ae01.alicdn.com/kf/He8394015d77944f19d085f9062711172U.png'
      },
      {
        bookName: '侧测试',
        bookImgUrl:
          'https://ae01.alicdn.com/kf/He8394015d77944f19d085f9062711172U.png'
      },
      {
        bookName: '侧测试',
        bookImgUrl:
          'https://ae01.alicdn.com/kf/He8394015d77944f19d085f9062711172U.png'
      },
      {
        bookName: '侧测试',
        bookImgUrl:
          'https://ae01.alicdn.com/kf/He8394015d77944f19d085f9062711172U.png'
      },
      {
        bookName: '侧测试',
        bookImgUrl:
          'https://ae01.alicdn.com/kf/He8394015d77944f19d085f9062711172U.png'
      }
    ],
    typeList: []
  },
  onLoad: function(options) {
    wx.setNavigationBarTitle({
      title: '书库'
    })
    wx.hideTabBar()
    util.myAjax('http://127.0.0.1:7001/api/typeList', {} , 'POST', res => {
      let tempObj = res.data
      tempObj.map((v, i) => {
        v.selected = false
        v.typeStr = v.type_str
        v.index = v.id
      })
      console.log(tempObj)
      this.setData({
        typeList: tempObj
      })
      // this.data.typeList = [{
      //   id: 1,
      //   type: '测试1',
      //   selected: false
      // }, {
      //   id: 2,
      //   typeStr: '测试2',
      //   selected: false
      // }, {
      //   id: 3,
      //   typeStr: '测试3',
      //   selected: false
      // }, {
      //   id: 3,
      //   typeStr: '测试3',
      //   selected: false
      // }, {
      //   id: 3,
      //   typeStr: '测试3',
      //   selected: false
      // }, {
      //   id: 3,
      //   typeStr: '测试3',
      //   selected: false
      // }, {
      //   id: 3,
      //   typeStr: '测试3',
      //   selected: false
      // }, {
      //   id: 3,
      //   type: '测试3',
      //   selected: false
      // }, {
      //   id: 3,
      //   type: '测试3',
      //   selected: false
      // }, {
      //   id: 3,
      //   type: '测试3',
      //   selected: false
      // }]
      // console.log('this.data.typeList', this.data.typeList)
    })
  },
  checkboxChange (e) {
    console.log('checkboxChange e:',e);
    let string = "typeList["+e.target.dataset.index+"].selected"
    console.log('e.target.dataset.index', e.target.dataset.index)
    console.log('this.data.typeList', this.data.typeList)

    console.log('this.data.typeList[e.target.dataset.index].selected', this.data.typeList[e.target.dataset.index].selected)
    this.setData({
        [string]: !this.data.typeList[e.target.dataset.index].selected
    })
    let detailValue = this.data.typeList.filter(it => it.selected).map(it => it.typeStr)
    console.log('所有选中的值为：', detailValue)
  },
  goFn: function (e) {
    console.log('goFn', e.currentTarget.dataset.url)
    if (app.globalData.userInfo || e.currentTarget.dataset.url.indexOf('/about/about') > -1) {
      wx.navigateTo({
        url: '../book-detail/book-detail'
      })
    } else {
      wx.showToast({
        title: '请先登陆',
        icon: 'none',
        duration: 2000
      })
      // alert('请先登陆')
    }
    
  },
  searchFn () {
    wx.navigateTo({
      url: '../search/search'
    })
  }
})