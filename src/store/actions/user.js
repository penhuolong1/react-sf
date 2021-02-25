import * as types from "../actions-type"
import { LOCALSTAGE_NAME } from '@/utils/constVal.js'
import { userInfo } from '@/api/user'

export const getUserInfo = () => (dispatch) => {
  userInfo().then(res => {
    if (res.state === 100) {
      dispatch(setUserInfo(res))
    } else {
      dispatch(setUserInfo(''))
    }
  })
}
export const setUserInfo = userInfo => {
  localStorage.setItem(LOCALSTAGE_NAME+'userInfo', JSON.stringify(userInfo))
  return {
    type: types.USER_SET_USER_INFO,
    userInfo
  }
}
