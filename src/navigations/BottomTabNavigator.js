import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons'

const Tab = createBottomTabNavigator()

const HomeBottomTab = () => {
	return (
		<Tab.Navigator
			screenOptions={({ route }) => ({
				
				tabBarIcon: ({ focused, color, size }) => {
					let iconName

					if (route.name === 'TabA') {
						iconName = focused
							? 'home'
							: 'home-outline';
					} else if (route.name === 'TabB') {
						iconName = focused ? 'mail' : 'mail-outline';
					} else if (route.name === 'TabC') {
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
			{/* <Tab.Screen name="TabA" component={HomeStackNavigator} />
			<Tab.Screen name="TabB" component={TabBScreen} />
			<Tab.Screen name="TabC" component={TabCScreen} /> */}
		</Tab.Navigator>
	)
}

export { HomeBottomTab }