import {
	LOGIN_SUCCESS,
	LOGIN_ATTEMPT,
	LOGIN_FAILED
} from '../actions/actionTypes';

const INITIAL_STATE = {
  isLoggedIn: false,
  isLoading: false,
  userData: {},
  error: undefined
}

export default function auth(state=INITIAL_STATE, action) {
  console.log(action.type);
  switch (action.type) {
    case LOGIN_ATTEMPT:
      return{
        ...state,
        isLoading:true,
        isLoggedIn:false
      }
      break;
    case LOGIN_SUCCESS:
      return{
        ...state,
        isLoading:false,
        isLoggedIn:true,
        userData:action.userData,
        error:undefined
      }
      break;
    case LOGIN_FAILED:
      return{
        ...state,
        isLoading:false,
        isLoggedIn:false,
        error:action.error
      }
      break;
    default:
      return state
  }
}