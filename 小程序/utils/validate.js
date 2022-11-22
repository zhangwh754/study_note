import { wxValidate } from './wxValidate'
import Toast from '@vant/weapp/toast/toast'

export const validate = function (e, [rules, toast], customRules = {}) {
  // 文档地址：https://github.com/wux-weapp/wx-extend/blob/master/docs/components/validate.md
  const WxValidate = new wxValidate(rules, toast)
  const keys = Object.keys(customRules)
  if (keys.length) {
    keys.forEach(key => {
      WxValidate.addMethod(key, customRules[key].callback, customRules[key].msg)
    })
  }
  if (!WxValidate.checkForm(e)) {
    const error = WxValidate.errorList[0]
    Toast(error.msg)
    return false
  }
  return true
}
