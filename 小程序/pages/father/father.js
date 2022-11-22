Page({
  data: {
    num: 1
  },

  customEvent(e) {
    this.setData({
      num: e.detail.num
    })
  }
})
