import * as types from "../actions-type"

export const setUserInfo = userInfo => {
  return {
    type: types.USER_SET_USER_INFO,
    userInfo
  }
}
