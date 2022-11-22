import { randomIntArrayInRange } from '../../utils/tools'

Component({
  options: {
    // 纯数据字段是一些·不用于界面渲染的 data 字段·，可以用于提升页面更新性能。
    // 指定 pureDataPattern 为一个正则表达式，符合这个正则表达式的属性将成为纯数据字段。
    pureDataPattern: /^_/
  },
  data: {
    _rgb: {
      r: 0,
      g: 0,
      b: 0
    },
    fullColor: '0,0,0'
  },

  methods: {
    add(e) {
      const type = e.target.dataset.type
      const foo = `_rgb.${type}`
      this.setData({
        [foo]: +this.data._rgb[type] + 5
      })
    },

    generateColor() {
      const value = randomIntArrayInRange(0, 255)
      return value.join(',')
    }
  },

  observers: {
    '_rgb.**'(newValue) {
      this.setData({
        fullColor: Object.values(newValue).join(',')
      })
    }
  },

  pageLifetimes: {
    show() {
      this.setData({
        fullColor: this.generateColor()
      })
      // 页面被展示
    }
  }
})
