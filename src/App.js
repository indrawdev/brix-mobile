import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigator from './navigations/BottomTabNavigator';
import { DashboardStackNavigator } from './navigations/StackNavigator';

export default function App() {
	return (
		<NavigationContainer>
			<DashboardStackNavigator />
		</NavigationContainer>
	);
};
