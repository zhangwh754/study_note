import { randomAlphaNumeric, randomIntArrayInRange } from '../../utils/tools'

// list.js
Page({
  data: {
    pageNum: 1,
    list: []
  },

  onLoad() {
    this.getList(1)
  },

  getList: async function (pageNum) {
    wx.showLoading({
      mask: true
    })
    const res = await this.generateList()
    const nowList = `list[${pageNum - 1}]`
    this.setData({
      [nowList]: res,
      pageNum: pageNum
    })
    wx.hideLoading()
  },

  onReachBottom() {
    const pageNum = this.data.pageNum + 1
    this.getList(pageNum)
  },

  generateList() {
    return new Promise(resolve => {
      setTimeout(() => {
        const data = Array.from({ length: 5 }, this.generateColor)
        resolve(data)
      }, 500)
    })
  },

  generateColor() {
    const value = randomIntArrayInRange(0, 255)
    const id = randomAlphaNumeric(5)
    return { id, value }
  }
})
