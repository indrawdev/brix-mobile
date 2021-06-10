import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons'
import {
	HomeStackNavigator,
	ProspectStackNavigator,
	MaintenanceStackNavigator,
	PlacementStackNavigator
} from './StackNavigator'

const Tab = createBottomTabNavigator()

const BottomTabNavigator = () => {
	return (
		<Tab.Navigator
			screenOptions={({ route }) => ({
				
				tabBarIcon: ({ focused, color, size }) => {
					let iconName

					if (route.name === 'Home') {
						iconName = focused ? 'home' : 'home-outline';
					} else if (route.name === 'Prospect') {
						iconName = focused ? 'mail' : 'mail-outline';
					} else if (route.name === 'Maintenance') {
						iconName = focused ? 'chatbubble-ellipses' : 'chatbubble-ellipses-outline';
					} else if (route.name === 'Placement') {
						iconName = focused ? 'chatbubble-ellipses' : 'chatbubble-ellipses-outline';
					}

					return <Ionicons name={iconName} size={size} color={color} />
				},
			})}
			tabBarOptions={{
				activeTintColor: 'tomato',
				inactiveTintColor: 'gray',
			}}
		>
			<Tab.Screen name="Home" component={HomeStackNavigator} />
			<Tab.Screen name="Prospect" component={ProspectStackNavigator} />
			<Tab.Screen name="Maintenance" component={MaintenanceStackNavigator} />
			<Tab.Screen name="Placement" component={PlacementStackNavigator} />
		</Tab.Navigator>
	)
}

export default BottomTabNavigator;