import { combineReducers } from 'redux';

const initialStateLogin = {
	email: '',
	password: '',
	isLogin: false
}

const LoginReducer = (state = initialStateLogin, action) => {
	return state;
}

const reducer = combineReducers({
	LoginReducer
});


export default reducer;