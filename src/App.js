import React from 'react';
import { Provider } from 'react-redux';
import {store} from './store';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigator from './navigations/BottomTabNavigator';
import { DashboardStackNavigator } from './navigations/StackNavigator';

export default function App() {
	return (
		<Provider store={store}>
			<NavigationContainer>
				<DashboardStackNavigator />
			</NavigationContainer>
		</Provider>
	);
};
