// components/credit_progress/credit_progress.js
Component({
  options: {
    styleIsolation: 'apply-shared'
  },

  properties: {
    count: {
      type: Number,
      value: 5
    },
    spot: {
      type: Object,
      value: []
    }
  },

  data: {
    percent: 0
  },

  pageLifetimes: {
    show() {
      this.progressLoad(0)
    }
  },

  methods: {
    /**
     * @description: 定时增加进度值，达成缓慢加载效果
     */
    progressLoad(percent) {
      this.setData({
        percent
      })
      if (percent >= this.properties.count) return
      setTimeout(() => {
        this.progressLoad(percent + 1)
      }, 17)
    }
  }
})
