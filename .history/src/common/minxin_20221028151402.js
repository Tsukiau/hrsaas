export const UserRulesMixin = {
  data() {
    const validateMobile = (rule, value, callback) => {
      // 成功callback()
      // 失败(new Erroe(''))
      const validMobile = /^1[3-9]\d{9}$/
      if (validMobile.test(value)) {
        callback()
      } else {
        callback()
        callback(new Error('手机号输入有误'))
      }
    }
    const validatePassword = (rule, value, callback) => {
      if (value.length < 6) {
        callback(new Error('The password can not be less than 6 digits'))
      } else {
        callback()
      }
    }
    return {

    }
  }
}
