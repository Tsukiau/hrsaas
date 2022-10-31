import request from '@/utils/request'

export function login(data) {
  return request({
    method: 'POST',
    url: '/sys/login',
    DATA

  })
}

export function getInfo(token) {

}

export function logout() {

}
