import React from 'react';
import { StyleSheet, TouchableOpacity, View, Image, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import {
	DashboardStackNavigator,
	ClientStackNavigator,
	EmployeeStackNavigator,
	NotificationStackNavigator,
	AccountStackNavigator
} from './StackNavigator'

import { TabIcon } from '../components';
import icons from '../constants/icons';
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
					elevation: 0,
					backgroundColor: COLORS.white,
					borderTopColor: 'transparent',
					height: 100
				}
			}}
		>
			<Tab.Screen
				name="Home"
				component={DashboardStackNavigator}
				options={{
					tabBarIcon: ({ focused }) =>
						<TabIcon
							focused={focused} icon={icons.home} label="Home"
						/>
				}}
			/>
			<Tab.Screen
				name="Client"
				component={ClientStackNavigator}
				options={{
					tabBarIcon: ({ focused }) =>
						<TabIcon
							focused={focused} icon={icons.pie_chart} label="Clients"
						/>
				}}
			/>
			<Tab.Screen
				name="Employee"
				component={EmployeeStackNavigator}
				options={{
					tabBarIcon: ({ focused }) =>
						<TabIcon
							focused={focused} icon={icons.info} label="Employee"
						/>
				}}
			/>
			<Tab.Screen
				name="Notification"
				component={NotificationStackNavigator}
				options={{
					tabBarIcon: ({ focused }) =>
						<TabIcon
							focused={focused} icon={icons.line_graph} label="Notification"
						/>
				}}
			/>
			<Tab.Screen
				name="Account"
				component={AccountStackNavigator}
				options={{
					tabBarIcon: ({ focused }) =>
						<TabIcon
							focused={focused} icon={icons.settings} label="Account"
						/>
				}}
			/>
		</Tab.Navigator>
	)
}

const styles = StyleSheet.create({
	shadow: {
		shadowColor: COLORS.black,
		shadowOffset: {
			width: 0,
			height: 10,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		elevation: 5
	}
})

export default BottomTabNavigator;