import request from '@/utils/request'

export function caseList(data) {
  return request({
    url: '/court/mediateter/getMByCId.jhtml?pageSize=8',
    method: 'get',
    data
  })
}

// 登陆
export const login = params => {
  return request({
    url: '/main/login2.jhtml',
    method: 'post',
    data: params
  })
}

// 查看用户信息
export const userInfo = () => {
  return request({
    url: '/main/getUserInfo.jhtml',
    method: 'get'
  })
}

// 退出
export const loginOut = () => {
  return request({
    url: '/main/loginOut.jhtml',
    method: 'get'
  })
}
