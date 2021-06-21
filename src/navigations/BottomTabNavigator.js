import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/FontAwesome5'
import {
	DashboardStackNavigator,
	SettingStackNavigator
} from './StackNavigator'

import {
	ProspectTopTab,
	MaintenanceTopTab,
	PlacementTopTab,
	ClaimTopTab
} from './TopTabNavigator'

import { COLORS } from '../constants';

const Tab = createBottomTabNavigator()

const BottomTabNavigator = () => {
	return (
		<Tab.Navigator
			tabBarOptions={{
				showLabel: false,
				style: {
					position: 'absolute',
					bottom: 0,
					left: 0,
					right: 0,
					backgroundColor: "transparent",
					elevation: 0
				}
			}}
			screenOptions={({ route }) => ({
				
				tabBarIcon: ({ focused, color, size }) => {
					let iconName

					if (route.name === 'Dashboard') {
						iconName = focused ? 'chart-line' : 'chart-line';
					} else if (route.name === 'Prospect') {
						iconName = focused ? 'file-alt' : 'file-alt';
					} else if (route.name === 'Maintenance') {
						iconName = focused ? 'file-archive' : 'file-archive';
					} else if (route.name === 'Placement') {
						iconName = focused ? 'file-pdf' : 'file-pdf';
					} else if (route.name === 'Claim') {
						iconName = focused ? 'bars' : 'bars';
					} else if (route.name === 'Setting') {
						iconName = focused ? 'bars' : 'bars';
					}

					return <Icon name={iconName} size={size} color={color} />
				},
			})}
			tabBarOptions={{
				activeTintColor: COLORS.gold,
				inactiveTintColor: COLORS.black,
				fontFamily: 'Roboto-Regular'
			}}
		>
			<Tab.Screen name="Dashboard" component={DashboardStackNavigator} />
			<Tab.Screen name="Prospect" component={ProspectTopTab} />
			<Tab.Screen name="Maintenance" component={MaintenanceTopTab} />
			<Tab.Screen name="Placement" component={PlacementTopTab} />
			<Tab.Screen name="Claim" component={ClaimTopTab} />
			<Tab.Screen name="Setting" component={SettingStackNavigator} />
		</Tab.Navigator>
	)
}

const styles = StyleSheet.create({
	shadow: {
		shadowColor: COLORS.primary,
		shadowOffset: {
			width: 0,
			height: 10,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,

		elevation: 5
	}
});

export default BottomTabNavigator;