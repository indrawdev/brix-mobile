import * as types from '../../constants/types';
import api from '../../constants/api';
import AsyncStorage from '@react-native-async-storage/async-storage';

let timer;

export const authenticate = (userId, token, expiryTime) => {
	return dispatch => {
    dispatch(setLogoutTimer(expiryTime));
    dispatch({ type: types.AUTHENTICATE, userId: userId, token: token });
  };
};

export const login = (email, password) => {
	return async dispatch => {
		const response = await fetch(api.LOGIN_URL, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				email: email,
				password: password
			})
		})

		if (!response.ok) {
			const errorResData = await response.json();
			let message = 'Something went wrong!';
			if (errorResData.success === false) {
				message = errorResData.message;
			}
			throw new Error(message);
		}

		const resData = await response.json();
		dispatch(authenticate(resData.data.user_id, resData.accessToken, parseInt(resData.expire)));

		const expirationDate = new Date(
      new Date().getTime() + parseInt(resData.expire)
    );
    saveDataToStorage(resData.accessToken, resData.data.user_id, resData.data.email, expirationDate);
	}
}

const clearLogoutTimer = () => {
  if (timer) {
    clearTimeout(timer);
  }
};

const setLogoutTimer = expirationTime => {
  return dispatch => {
    timer = setTimeout(() => {
      dispatch(logout());
    }, expirationTime);
  };
};

export const logout = () => {
  clearLogoutTimer();
  AsyncStorage.removeItem('userData');
  return { type: types.LOGOUT };
};

const saveDataToStorage = async (token, userId, email, expirationDate) => {
	try {
		const jsonValue = JSON.stringify({
			token: token,
			userId: userId,
			email: email,
			expiryDate: expirationDate.toISOString(),
		});
		
		await AsyncStorage.setItem('userData', jsonValue);
  } catch (e) {
		console.log(e);
	}
}