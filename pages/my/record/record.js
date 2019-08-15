//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    userInfo: {},
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
    ]
  },
  onLoad: function(options) {
    wx.setNavigationBarTitle({
      title: '阅读记录'
    })
    this.setData({
      userInfo: app.globalData.userInfo
    })
  },
  back: function() {
    wx.navigateBack()
  }
})
