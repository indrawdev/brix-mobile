import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Startup, Login } from '../screens';
import DrawerNavigator from './DrawerNavigator';

const Stack = createStackNavigator();

const RootNavigator = () => {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen name="Startup" component={Startup} />
			<Stack.Screen name="Login" component={Login} />
			<Stack.Screen
				name="Main"
				component={DrawerNavigator}
			/>
		</Stack.Navigator>
	)
}

export default RootNavigator;