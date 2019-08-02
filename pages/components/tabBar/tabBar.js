Component({
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  properties: {
    homeFlag: {
      // 属性名
      type: Boolean,
      value: false
    },
    tagFlag: {
      // 属性名
      type: Boolean,
      value: false
    },
    myFlag: {
      // 属性名
      type: Boolean,
      value: false
    }
  },
  ready: function() {
    console.log('tabbar', this)
    this.data.homeFlag
      ? this.setData({
          homeSrc:
            'https://ae01.alicdn.com/kf/Hc244ba50e9ed44afbda9a766bec2b794I.png'
        })
      : ''
    this.data.tagFlag
      ? this.setData({
          tagSrc:
            'https://ae01.alicdn.com/kf/He740a351e24a4976b7a24642aa3269944.png'
        })
      : ''
    this.data.myFlag
      ? this.setData({
          mySrc:
            'https://ae01.alicdn.com/kf/H0c48a9a21709442f8d3c8d7588e6be47P.png'
        })
      : ''
  },
  data: {
    homeSrc:
      'https://ae01.alicdn.com/kf/H2e560b469c9e43199e45217e61448da0k.png',
    tagSrc: 'https://ae01.alicdn.com/kf/H34972498fd5a493ba98ea4e9c8402db96.png',
    mySrc: 'https://ae01.alicdn.com/kf/H3e70952334d848f5bbc7a2404744444cF.png'
  }, // 私有数据，可用于模板渲染
  methods: {
    tabClick: function(event) {
      this.changeImg(event.currentTarget.id)
    },
    changeImg: function(id) {
      // let data = this.data
      if (id === 'my') {
        // this.setData({
        //   myFlag: !data.myFlag,
        //   homeFlag: false,
        //   tagFlag: false
        // })
        // if (data.myFlag) {
        //   this.setData({
        //     mySrc:
        //       'https://ae01.alicdn.com/kf/H0c48a9a21709442f8d3c8d7588e6be47P.png'
        //   })
        //   this.setData({
        //     homeSrc:
        //       'https://ae01.alicdn.com/kf/H2e560b469c9e43199e45217e61448da0k.png'
        //   })
        //   this.setData({
        //     tagSrc:
        //       'https://ae01.alicdn.com/kf/H34972498fd5a493ba98ea4e9c8402db96.png'
        //   })
        // }
        wx.switchTab({
          url: '../my/my',
          success: e => {
            console.log('success', e)
          },
          fail: e => {
            console.log('fail', e)
          },
          complete: e => {
            console.log('complete', e)
          }
        })
      }
      if (id === 'home') {
        // this.setData({
        //   homeFlag: !data.homeFlag,
        //   myFlag: false,
        //   tagFlag: false
        // })
        // if (data.homeFlag) {
        //   this.setData({
        //     homeSrc:
        //       'https://ae01.alicdn.com/kf/Hc244ba50e9ed44afbda9a766bec2b794I.png'
        //   })
        //   this.setData({
        //     tagSrc:
        //       'https://ae01.alicdn.com/kf/H34972498fd5a493ba98ea4e9c8402db96.png'
        //   })
        //   this.setData({
        //     mySrc:
        //       'https://ae01.alicdn.com/kf/H3e70952334d848f5bbc7a2404744444cF.png'
        //   })
        // }
        wx.switchTab({
          url: '../home/home',
          success: e => {
            console.log('success', e)
          },
          fail: e => {
            console.log('fail', e)
          },
          complete: e => {
            console.log('complete', e)
          }
        })
      }
      if (id === 'tag') {
        // this.setData({
        //   tagFlag: !data.tagFlag,
        //   homeFlag: false,
        //   myFlag: false
        // })
        wx.switchTab({
          url: '../tag/tag',
          success: e => {
            console.log('success', e)
          },
          fail: e => {
            console.log('fail', e)
          },
          complete: e => {
            console.log('complete', e)
          }
        })
        // if (data.tagFlag) {
        //   this.setData({
        //     tagSrc:
        //       'https://ae01.alicdn.com/kf/He740a351e24a4976b7a24642aa3269944.png'
        //   })
        //   this.setData({
        //     homeSrc:
        //       'https://ae01.alicdn.com/kf/H2e560b469c9e43199e45217e61448da0k.png'
        //   })
        //   this.setData({
        //     mySrc:
        //       'https://ae01.alicdn.com/kf/H3e70952334d848f5bbc7a2404744444cF.png'
        //   })
        // }
      }
    }
  }
})
