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
				name="Dashboard"
				component={DashboardStackNavigator}
				options={{
					tabBarIcon: ({ focused }) => (
						<View
							style={{
								alignItems: 'center',
								justifyContent: 'center'
							}}
						>
							<Image
								source={icons.home}
								resizeMode="contain"
								style={{
									width: 25,
									height: 25,
									tintColor: focused ? COLORS.primary : COLORS.black
								}}
							/>
							<Text
								style={{
									color: focused ? COLORS.primary : COLORS.black,
									...FONTS.body5
								}}
							>Home</Text>
						</View>
					)
				}}
			/>
			<Tab.Screen
				name="Prospect"
				component={ProspectTopTab}
				options={{
					tabBarIcon: ({ focused }) => (
						<View
							style={{
								alignItems: 'center',
								justifyContent: 'center'
							}}
						>
							<Image
								source={icons.line_graph}
								resizeMode="contain"
								style={{
									width: 25,
									height: 25,
									tintColor: focused ? COLORS.primary : COLORS.black
								}}
							/>
							<Text
								style={{
									color: focused ? COLORS.primary : COLORS.black,
									...FONTS.body5
								}}
							>Prospect</Text>
						</View>

					)
				}}
			/>
			<Tab.Screen
				name="Maintenance"
				component={MaintenanceTopTab}
				options={{
					tabBarIcon: ({ focused }) => (
						<View
							style={{
								alignItems: 'center',
								justifyContent: 'center'
							}}
						>
							<Image
								source={icons.pie_chart}
								resizeMode="contain"
								style={{
									width: 25,
									height: 25,
									tintColor: focused ? COLORS.primary : COLORS.black
								}}
							/>
							<Text
								style={{
									color: focused ? COLORS.primary : COLORS.black,
									...FONTS.body5
								}}
							>Maintenance</Text>
						</View>
					)
				}}
			/>
			<Tab.Screen
				name="Placement"
				component={PlacementTopTab}
				options={{
					tabBarIcon: ({ focused }) => (
						<View
							style={{
								alignItems: 'center',
								justifyContent: 'center'
							}}
						>
							<Image
								source={icons.settings}
								resizeMode="contain"
								style={{
									width: 25,
									height: 25,
									tintColor: focused ? COLORS.primary : COLORS.black
								}}
							/>
							<Text
								style={{
									color: focused ? COLORS.primary : COLORS.black,
									...FONTS.body5
								}}
							>Setting</Text>
						</View>
					)
				}}
			/>
			<Tab.Screen
				name="Crypto"
				component={CryptoStackNavigator}
				options={{
					tabBarIcon: ({ focused }) => (
						<View
							style={{
								alignItems: 'center',
								justifyContent: 'center'
							}}
						>
							<Image
								source={icons.transaction}
								resizeMode="contain"
								style={{
									width: 25,
									height: 25,
									tintColor: focused ? COLORS.primary : COLORS.black
								}}
							/>
							<Text
								style={{
									color: focused ? COLORS.primary : COLORS.black,
									...FONTS.body5
								}}
							>Crypto</Text>
						</View>
					)
				}}
			/>
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
})

export default BottomTabNavigator;