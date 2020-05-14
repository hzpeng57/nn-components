// components/popup/popup.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    isShow: {
      type: Boolean,
      value: false
    },
    height: {
      type: Number,
      value: 500
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
        animation1.translateY(0).step();

        this.setData({
          animationData1: animation.export(),
          animationData2: animation1.export()
        })
      })
    },

    // 点击空白隐藏遮罩
    hiddenModel() {
      const query = this.createSelectorQuery();
      query.select(`#popup`).boundingClientRect()
      query.exec((res) => {
        // 初始化取不到
        if (!res[0]) {
          return false;
        }
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
        animation1.translateY(`${res[0].height}px`).step()
        this.setData({
          animationData1: animation.export(),
          animationData2: animation1.export()
        })
        setTimeout(() => {
          this.setData({
            isHidden: true
          })
        }, 300)
      })
    },
  }
})