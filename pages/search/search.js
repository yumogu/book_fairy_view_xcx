//tag.js
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
    }, {
      index: 3,
      type: '测试3',
      selected: false
    }, {
      index: 3,
      type: '测试3',
      selected: false
    }, {
      index: 3,
      type: '测试3',
      selected: false
    }, {
      index: 3,
      type: '测试3',
      selected: false
    }, {
      index: 3,
      type: '测试3',
      selected: false
    }, {
      index: 3,
      type: '测试3',
      selected: false
    }, {
      index: 3,
      type: '测试3',
      selected: false
    }]
  },
  onLoad: function(options) {
    // wx.setNavigationBarTitle({
    //   title: '书库'
    // })
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
    
  }
})