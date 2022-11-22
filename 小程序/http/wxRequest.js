import Toast from '@vant/weapp/toast/toast'

const baseUrl = 'http://localhost:1024'

const errHandle = (url, data, res) => {
  const msg = res?.data?.msg || '错误'
  console.warn('↓↓↓↓↓↓↓↓↓↓请求发生错误！！↓↓↓↓↓↓↓↓↓↓')
  console.log('----------请求地址:  ' + baseUrl + url)
  data && console.log('----------请求参数:  ' + JSON.stringify(data))
  console.log('----------请求结果:  ')
  console.log(JSON.stringify(res.data))
  console.warn('↑↑↑↑↑↑↑↑↑↑请求发生错误！！↑↑↑↑↑↑↑↑↑↑')
  return msg
}

let count = 0 // loading的标识符，结束请求且为0时hideLoading

let timestamp // 存储每次展示loading的时间戳

/**
 * @description: vant loading请求的封装，
 * @param {'add' | 'sub'} type 是show还是hideLoading
 * @param {Object} config [title = "loading..."][mask = true][minTime = 800]
 */
const toggleLoading = function (type, config = {}) {
  if (count === 0 && type === 'add') {
    count++
    // wx.showLoading({
    //   title: config.loading.title || '',
    //   mask: config.loading.mask || true
    // })
    Toast.loading({
      message: config.loading.title || 'loading...',
      forbidClick: config.loading.mask || true,
      duration: 0
    })
    timestamp = Date.now()
  } else if (count === 1 && type === 'sub') {
    config.minTime || (config.minTime = 800)
    count--
    // console.log(`${Math.max(0, timestamp + config.minTime - Date.now())}毫秒后关闭Toast。`)
    setTimeout(() => {
      // wx.hideLoading()
      Toast.clear()
    }, Math.max(0, timestamp + config.minTime - Date.now()))
  }
}

/**
 * @description: 网络接口请求封装
 * @param {Object} config [{load: Boolean}]
 */
export const wxRequest = function (method, url, data, config = {}) {
  return new Promise(function (resolve, reject) {
    if (config.loading) {
      toggleLoading('add', config)
    }
    wx.request({
      method,
      url: baseUrl + url,
      data,
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        if (res?.data?.code == '200') {
          resolve(res.data)
        } else {
          const err = errHandle(url, data, res)
          reject(err)
        }
      },
      fail(_res) {
        reject()
        wx.showToast({
          title: '网络异常',
          icon: 'none',
          duration: 1500
        })
      },
      complete() {
        if (config.loading) {
          toggleLoading('sub')
        }
      }
    })
  })
}
