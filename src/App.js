import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from 'react-redux';
import { store, persistor } from './store';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigator from './navigations/BottomTabNavigator';
import DrawerNavigator from './navigations/DrawerNavigator';
import { DashboardStackNavigator } from './navigations/StackNavigator';
import { Login } from './screens';

export default function App() {
	return (
		<NavigationContainer>
			<BottomTabNavigator />
		</NavigationContainer>
	);
};
