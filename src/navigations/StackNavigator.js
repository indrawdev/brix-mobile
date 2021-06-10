import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Dashboard from '../screens/Dashboard';
import Pipeline from '../screens/Pipeline';
import Request from '../screens/Request';
import Prospect from '../screens/Prospect';
import Renewal from '../screens/Renewal';
import Release from '../screens/Release';
import Placing from '../screens/Placing';
import Quotation from '../screens/Quotation';

const Stack = createStackNavigator()

const screenOptionStyle = {
	headerStyle: {
		backgroundColor: '#f4511e',
	},
	headerTintColor: '#fff',
	headerTitleStyle: {
		alignSelf: 'center',
		fontWeight: 'normal',
	}
}

const HomeStackNavigator = () => {
	return (
		<Stack.Navigator screenOptions={screenOptionStyle}>
			<Stack.Screen name="Dashboard" component={Dashboard} />
		</Stack.Navigator>
	)
}

const ProspectStackNavigator = () => {
	return (
		<Stack.Navigator screenOptions={screenOptionStyle}>
			<Stack.Screen name="Pipeline" component={Pipeline} />
			<Stack.Screen name="Request" component={Request} />
		</Stack.Navigator>
	)
}

const MaintenanceStackNavigator = () => {
	return (
		<Stack.Navigator screenOptions={screenOptionStyle}>
			<Stack.Screen name="Prospect" component={Prospect} />
			<Stack.Screen name="Renewal" component={Renewal} />
		</Stack.Navigator>
	)
}

const PlacementStackNavigator = () => {
	return (
		<Stack.Navigator screenOptions={screenOptionStyle}>
			<Stack.Screen name="Release" component={Release} />
			<Stack.Screen name="Placing" component={Placing} />
			<Stack.Screen name="Quotation" component={Quotation} />
		</Stack.Navigator>
	)
}

export {
	HomeStackNavigator,
	ProspectStackNavigator,
	MaintenanceStackNavigator,
	PlacementStackNavigator
}