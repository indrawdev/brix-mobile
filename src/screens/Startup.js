import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as authActions from '../redux/actions/auth';
import { Loading } from '../components';


const Startup = props => {
	const dispatch = useDispatch();

	useEffect(() => {
		const tryLogin = async () => {
			const userData = await AsyncStorage.getItem('userData');
			if (!userData) {
				props.navigation.navigate('Login');
				return;
			}
			const transformedData = JSON.parse(userData);
			const { token, userId, expiryDate } = transformedData;
			const expirationDate = new Date(expiryDate);

			if (expirationDate <= new Date() || !token || !userId) {
				props.navigation.navigate('Login');
				return;
			}

			const expirationTime = expirationDate.getTime() - new Date().getTime();

			props.navigation.navigate('Main');
			dispatch(authActions.authenticate(userId, token, expirationTime));
		}

		tryLogin();

	}, [dispatch]);

	return (
    <View style={styles.screen}>
      <Loading />
    </View>
	);
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default Startup;