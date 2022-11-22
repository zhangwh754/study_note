import { get, post } from '../../http/service'

// index.js
Page({
  data: {
    num: 0
  },

  onLoad() {
    this.add(0)
  },

  add(num) {
    this.setData({
      num: num + 1
    })
    this.timer = setTimeout(() => {
      this.add(num + 1)
    }, 500)
  },

  btnClick: async function () {
    try {
      const res = await get(114514)
      console.log(res)
    } catch (error) {
      wx.showToast({ title: error, icon: 'none' })
    }
  },

  btnClick2: async function () {
    try {
      const res = await get(1024)
      console.log(res)
    } catch (error) {
      wx.showToast({ title: error, icon: 'none' })
    }
  },

  btnClick3: async function () {
    try {
      const res = await post(114514)
      console.log(res)
    } catch (error) {
      wx.showToast({ title: error, icon: 'none' })
    }
  },

  btnClick4: async function () {
    try {
      const res = await post(1024)
      console.log(res)
    } catch (error) {
      wx.showToast({ title: error, icon: 'none' })
    }
  }
})
