Component({
  properties: {
    num: Number
  },

  methods: {
    btnClick() {
      var myEventDetail = { num: this.properties.num + 1 } // detail对象，提供给事件监听函数
      var myEventOption = {} // 触发事件的选项
      this.triggerEvent('customEvent', myEventDetail, myEventOption)
    }
  }
})
