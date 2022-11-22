import { validate } from '../../utils/validate'

Page({
  data: {
    informant: '',
    rules: [
      {
        informant: {
          required: true,
          minlength: 2,
          maxlength: 10,
          // informant: 5
        }
      },
      {
        informant: {
          required: '请输入您的姓名',
          minlength: '姓名太短',
          maxlength: '姓名太长'
        }
      }
    ]
  },

  submit(e) {
    // const customRules = {
    //   informant: {
    //     callback: (value, param) => {
    //       return value.length < param
    //     },
    //     msg: '长度必须小于5'
    //   }
    // }
    if (validate(e, this.data.rules)) {
      console.log('成功')
    }
  }
})
