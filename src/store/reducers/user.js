
import * as types from '../actions-type'
import { LOCALSTAGE_NAME } from '@/utils/constVal.js'
const initState = {
  userInfo: window.localStorage.getItem(LOCALSTAGE_NAME+'userInfo') ? JSON.parse(window.localStorage.getItem(LOCALSTAGE_NAME+'userInfo')) : ''
};
export default function user(state = initState, action) {
  switch (action.type) {
    case types.USER_SET_USER_INFO:
      return {
        ...state,
        userInfo: action.userInfo
      };
    default:
      return state;
  }
}
