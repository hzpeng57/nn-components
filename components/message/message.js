// components/message/message.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    content: {
      type: String,
      value: ''
    },
    isShow: {
      type: Boolean,
      value: false
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    isHidden: true
  },

  observers: {
    'isShow': function (value) {
      this.show(value);
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    show(value) {
      this.setData({
        isHidden: !value
      })
    }
  }
})
