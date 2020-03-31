Component({
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  properties: {
    items: {
      type: Array,
      default: []
    },
    maskDisplay: {
      type: String,
      default: 'none',//遮罩层隐藏
    },
    //侧边菜单的一些属性
    slideHeight: {
      type: Number,
      default: 0,
    },
    slideRight: {
      type: Number,
      default: 0,
    },
    slideWidth: {
      type: Number,
      default: 0,
    },
    slideDisplay: {
      type: String,
      default: 'none',
    },
    screenHeight: {
      type: Number,
      default: 0,
    },
    screenWidth: {
      type: Number,
      default: 0,
    },
    //动画
    slideAnimation: {
      type: Object
    },
    // 当前章节详细信息
    catalogData: {
      type: Object,
      default: {}
    },
  },
  observers: {
    'maskDisplay': function(maskDisplay) {
      console.log('observers.maskDisplay', maskDisplay)
      // // this.setData({
      // //   items: items
      // // })
      // this.items = items
    },
    'slideDisplay': function (slideDisplay) {
      console.log('observers.slideDisplay', slideDisplay)
    },
    'catalogData' : function (catalogData) {
      console.log('子observers.catalogData', catalogData)
    }
  },
  ready: function () {
    let _this = this
    wx.getSystemInfo({
      success: function(res) {
        _this.setData({
          screenHeight: res.windowHeight,
          screenWidth: res.windowWidth,
          slideHeight: res.windowHeight,
          slideRight: res.windowWidth,
          slideWidth: res.windowWidth * 0.7
        });
      }
    });
    console.log('ready',this.data, this.properties.items)
  },
  methods: {
    //侧栏展开
    slideUp() {
      var animation = wx.createAnimation({
        duration: 200
      });
      animation.translateX('100%').step();
      this.setData({
        slideAnimation: animation.export()
      });
      setTimeout( () => {
        this.setData({
          maskDisplay: 'block'
        });

      }, 100)
    },
    //侧栏关闭
    slideDown() {
      var animation = wx.createAnimation({
        duration: 200
      });
      animation.translateX('-100%').step();
      this.setData({
        slideAnimation: animation.export()
      });
      this.setData({
        maskDisplay: 'none'
      });
    },
    slideCloseEvent (e) {
      console.log(e, e.currentTarget.dataset.catalogdata)
      this.triggerEvent('slideCloseEvent', e.currentTarget.dataset.catalogdata)
      // this.setData({
      //   catalogData: e.currentTarget.dataset.catalogdata
      // })
      this.slideDown()
    }
      
  }
})
