import React from 'react';
import { StyleSheet, TouchableOpacity, View, Image, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Svg, {
	Path
} from 'react-native-svg';

import {
	DashboardStackNavigator,
	SettingStackNavigator,
	CryptoStackNavigator
} from './StackNavigator'

import {
	ProspectTopTab,
	MaintenanceTopTab,
	PlacementTopTab,
	ClaimTopTab
} from './TopTabNavigator'

import { TabIcon } from '../components';
import icons from '../constants/icons';
import { COLORS, FONTS } from '../constants';

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
				name="Prospect"
				component={ProspectTopTab}
				options={{
					tabBarIcon: ({ focused }) =>
						<TabIcon
							focused={focused} icon={icons.line_graph} label="Prospect"
						/>
				}}
			/>
			<Tab.Screen
				name="Maintenance"
				component={MaintenanceTopTab}
				options={{
					tabBarIcon: ({ focused }) =>
						<TabIcon
							focused={focused} icon={icons.pie_chart} label="Maintenance"
						/>
				}}
			/>
			<Tab.Screen
				name="Placement"
				component={PlacementTopTab}
				options={{
					tabBarIcon: ({ focused }) =>
						<TabIcon
							focused={focused} icon={icons.settings} label="Setting"
						/>
				}}
			/>
			<Tab.Screen
				name="Crypto"
				component={CryptoStackNavigator}
				options={{
					tabBarIcon: ({ focused }) =>
						<TabIcon
							focused={focused} icon={icons.transaction} label="Crypto"
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