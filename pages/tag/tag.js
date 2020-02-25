//index.js
//获取应用实例
const app = getApp()

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
    typeList: [{
      index: 1,
      type: '测试1',
      selected: false
    }, {
      index: 2,
      type: '测试2',
      selected: false
    }, {
      index: 3,
      type: '测试3',
      selected: false
    }]
  },
  onLoad: function(options) {
    wx.hideTabBar()
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
    let detailValue = this.data.typeList.filter(it => it.selected).map(it => it.type)
    console.log('所有选中的值为：', detailValue)
  }
})
// //index.js
// //获取应用实例
// const app = getApp()

// Page({
//   data: {
//     userInfo: {},
    
//   },
//   onLoad: function(options) {
//     wx.setNavigationBarTitle({
//       title: '阅读记录'
//     })
//     this.setData({
//       userInfo: app.globalData.userInfo
//     })
//   },
//   back: function() {
//     wx.navigateBack()
//   }
// })
