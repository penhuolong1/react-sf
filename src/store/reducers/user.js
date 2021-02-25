
import * as types from '../actions-type'
const initState = {
  userInfo: {
    name: '123'
  },
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
