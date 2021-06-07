import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator()

const screenOptionStyle = {
	headerStyle: {
		backgroundColor: '#f4511e',

	},
	headerTintColor: '#fff',
	headerTitleStyle: {
		alignSelf: 'center',
		fontWeight: 'normal',
		fontFamily: 'Montserrat-Regular'
	}
}


const MainStackNavigator = () => {
	return (
		<Stack.Navigator>

		</Stack.Navigator>
	)
}

const HomeStackNavigator = () => {
	return (
		<Stack.Navigator screenOptions={screenOptionStyle}>

		</Stack.Navigator>
	)
}

const PlacementStackNavigator = () => {
	return (
		<Stack.Navigator screenOptions={screenOptionStyle}>

		</Stack.Navigator>
	)
}

export {
	MainStackNavigator,
	HomeStackNavigator,
	PlacementStackNavigator
}