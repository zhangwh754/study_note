import { observable, action } from 'mobx-miniprogram'

export const store = observable({
  count: 0,
  // 计算属性
  get double() {
    return this.count * 2
  },
  increase: action(function (num) {
    this.count += num
  })
})
