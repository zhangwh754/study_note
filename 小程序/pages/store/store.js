import { createStoreBindings } from 'mobx-miniprogram-bindings'
import { store } from '../../store/store.js'

Page({
  onLoad() {
    this.storeBindings = createStoreBindings(this, {
      store,
      fields: ['count', 'double'],
      actions: ['increase']
    })
  },
  // count 递增
  increaseHandle() {
    this.increase(1)
  },
  // 页面卸载时,销毁当前页面的 store 绑定
  onUnload() {
    this.storeBindings.destroyStoreBindings()
  }
})
