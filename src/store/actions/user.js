import * as types from "../actions-type"
import { LOCALSTAGE_NAME } from '@/utils/constVal.js'

export const setUserInfo = userInfo => {
  localStorage.setItem(LOCALSTAGE_NAME+'userInfo', JSON.stringify(userInfo))
  return {
    type: types.USER_SET_USER_INFO,
    userInfo
  }
}
