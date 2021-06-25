import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Login } from '../screens';
import BottomTabNavigator from '../navigations/BottomTabNavigator';

const Stack = createStackNavigator();


const RootNavigator = () => {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen name="Login" component={Login} />
			<Stack.Screen name="Dashboard" component={BottomTabNavigator} />
		</Stack.Navigator>
	)
}

export default RootNavigator;