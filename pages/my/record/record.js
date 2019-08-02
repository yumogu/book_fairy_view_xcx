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
          'https://ae01.alicdn.com/kf/Hf115f27b2c344099ba643d7bb2f985eai.png'
      },
      {
        bookName: 'c测试',
        bookImgUrl:
          'https://ae01.alicdn.com/kf/Hf115f27b2c344099ba643d7bb2f985eai.png'
      },
      {
        bookName: '侧测试',
        bookImgUrl:
          'https://ae01.alicdn.com/kf/Hf115f27b2c344099ba643d7bb2f985eai.png'
      },
      {
        bookName: '侧测试',
        bookImgUrl:
          'https://ae01.alicdn.com/kf/Hf115f27b2c344099ba643d7bb2f985eai.png'
      },
      {
        bookName: '侧测试',
        bookImgUrl:
          'https://ae01.alicdn.com/kf/Hf115f27b2c344099ba643d7bb2f985eai.png'
      },
      {
        bookName: '侧测试',
        bookImgUrl:
          'https://ae01.alicdn.com/kf/Hf115f27b2c344099ba643d7bb2f985eai.png'
      },
      {
        bookName: '侧测试',
        bookImgUrl:
          'https://ae01.alicdn.com/kf/Hf115f27b2c344099ba643d7bb2f985eai.png'
      },
      {
        bookName: '侧测试',
        bookImgUrl:
          'https://ae01.alicdn.com/kf/Hf115f27b2c344099ba643d7bb2f985eai.png'
      },
      {
        bookName: '侧测试',
        bookImgUrl:
          'https://ae01.alicdn.com/kf/Hf115f27b2c344099ba643d7bb2f985eai.png'
      },
      {
        bookName: '侧测试',
        bookImgUrl:
          'https://ae01.alicdn.com/kf/Hf115f27b2c344099ba643d7bb2f985eai.png'
      },
      {
        bookName: '侧测试',
        bookImgUrl:
          'https://ae01.alicdn.com/kf/Hf115f27b2c344099ba643d7bb2f985eai.png'
      },
      {
        bookName: '侧测试',
        bookImgUrl:
          'https://ae01.alicdn.com/kf/Hf115f27b2c344099ba643d7bb2f985eai.png'
      },
      {
        bookName: '侧测试',
        bookImgUrl:
          'https://ae01.alicdn.com/kf/Hf115f27b2c344099ba643d7bb2f985eai.png'
      },
      {
        bookName: '侧测试',
        bookImgUrl:
          'https://ae01.alicdn.com/kf/Hf115f27b2c344099ba643d7bb2f985eai.png'
      },
      {
        bookName: '侧测试',
        bookImgUrl:
          'https://ae01.alicdn.com/kf/Hf115f27b2c344099ba643d7bb2f985eai.png'
      },
      {
        bookName: '侧测试',
        bookImgUrl:
          'https://ae01.alicdn.com/kf/Hf115f27b2c344099ba643d7bb2f985eai.png'
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
