// components/modal/modal.js

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    isShow: {
      type: Boolean,
      value: false
    },

    width: {
      type: Number,
      value: 520
    },

    height: {
      type: Number,
      value: 280
    },

    isShowClose: {
      type: Boolean,
      value: false
    },

    isFooter: {
      type: Boolean,
      value: true
    },

    cancelText: {
      type: String,
      value: '取消'
    },

    confirmText: {
      type: String,
      value: '确定'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    animationData1: {},
    animationData2: {},
    isHidden: true
  },

  observers: {
    'isShow': function (value) {
      if (value) {
        this.beginAnimation();
      } else {
        this.hiddenModel();
      }
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {

    // 启动动画
    beginAnimation() {
      this.setData({
        isHidden: false
      }, () => {

        var animation = wx.createAnimation({
          duration: 300,
          timingFunction: 'ease-out',
        })

        var animation1 = wx.createAnimation({
          duration: 300,
          timingFunction: 'ease-out',
        })

        this.animation = animation;
        this.animation1 = animation1;

        animation.opacity(1).step();
        animation1.scale(1).step();

        this.setData({
          animationData1: animation.export(),
          animationData2: animation1.export()
        })

        animation1.translateY('-50%').left(((750 - this.properties.width) / 2) + 'rpx').step();

        this.setData({
          animationData2: animation1.export()
        })
      })
    },

    // 点击空白隐藏遮罩
    hiddenModel() {
      var animation = wx.createAnimation({
        duration: 300,
        timingFunction: 'ease-out',
      })

      var animation1 = wx.createAnimation({
        duration: 300,
        timingFunction: 'ease-out',
      })

      this.animation = animation
      this.animation1 = animation1

      animation.opacity(0).step()
      animation1.scale(0).step()
      this.setData({
        animationData1: animation.export(),
        animationData2: animation1.export()
      })
      setTimeout(() => {
        this.setData({
          isHidden: true
        })
      }, 300)
    },

    // 点击确定
    clickConfirm() {
      this.triggerEvent('onconfirm')
    }
  }
})