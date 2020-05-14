const app = getApp()

Page({
  data: {
    isShowLoading: false,
    isShowMessage: false,
    isShowModal: false,
    isShowPopup: false,
    messageCon: '这是Message组件',
  },

  // 切换Loading组件显示状态
  changeLoading() {
    this.setData({
      isShowLoading: !this.data.isShowLoading
    })
  },

  // 切换Message组件显示状态
  changeMessage() {
    this.setData({
      isShowMessage: !this.data.isShowMessage
    })
  },

  // 切换Modal组件显示状态
  changeModal() {
    this.setData({
      isShowModal: true
    })
  },

  // 切换Popup组件显示状态
  changePopup() {
    this.setData({
      isShowPopup: true
    })
  },

  // modal confirm事件
  modalConfirm() {
    wx.showToast({
      title: '你点击了确定',
      icon: 'none'
    })
    this.setData({
      isShowModal: false
    })
  },

  onLoad: function () {
   
  },
})
