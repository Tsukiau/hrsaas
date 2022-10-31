// 手机号和密码
export const UserRulesMixin = {
  data() {
    const validateMobile = (rule, value, callback) => {
      // 成功callback()
      // 失败(new Erroe(''))
      const validMobile = /^1[3-9]\d{9}$/
      if (validMobile.test(value)) {
        callback()
      } else {
        callback(new Error('手机号输入有误'))
      }
    }
    return {
      loginRules: {
        // validator 校验的函数
        mobile: [
          { required: true, trigger: 'blur', message: '手机号不能为空' },
          { validator: validateMobile, trigger: 'blur' }],

        password: [
          { required: true, trigger: 'blur', message: '密码不能为空' },
          { trigger: 'blur', min: 6, max: 16, message: '密码的长度在6-16位之间 ' }
        ]
      }
    }
  }
}
// 添加部门
export const deptRules = {
  data() {
    return {
      loginRules: {
        mobile: [
          { required: true, trigger: 'blur', message: '手机号不能为空' },
          { validator: validateMobile, trigger: 'blur' }],

        password: [
          { required: true, trigger: 'blur', message: '密码不能为空' },
          { trigger: 'blur', min: 6, max: 16, message: '密码的长度在6-16位之间 ' }
        ]
      }
    }
  }
}