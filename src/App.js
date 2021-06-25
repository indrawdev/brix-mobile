import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './navigations/RootNavigator';
import DrawerNavigator from './navigations/DrawerNavigator';

export default function App() {
	return (
		<Provider store={store}>
			<NavigationContainer>
				<RootNavigator />
			</NavigationContainer>
		</Provider>
	);
};
