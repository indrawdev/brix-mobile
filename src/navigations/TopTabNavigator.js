import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import {
	PipelineStackNavigator,
	RequestStackNavigator,
	ProspectStackNavigator,
	RenewalStackNavigator,
	ReleaseStackNavigator,
	PlacingStackNavigator,
	QuotationStackNavigator,
} from './StackNavigator'

import { COLORS } from '../constants/theme';

const Tab = createMaterialTopTabNavigator()

const tabBarOptionsStyle = {
	labelStyle: {
		fontSize: 12,
		alignSelf: 'center',
		fontWeight: 'normal',
		fontFamily: 'Roboto-Bold'
	},
	activeTintColor: COLORS.white,
	style: { backgroundColor: COLORS.purple },
}

const ProspectTopTab = () => {
	return (
		<Tab.Navigator
			tabBarOptions={tabBarOptionsStyle}
			initialRouteName="Pipeline"
		>
			<Tab.Screen name="Pipeline" component={PipelineStackNavigator} />
			<Tab.Screen name="Request" component={RequestStackNavigator} />
		</Tab.Navigator>
	)
}

const MaintenanceTopTab = () => {
	return (
		<Tab.Navigator
			tabBarOptions={tabBarOptionsStyle}
			initialRouteName="Prospect"
		>
			<Tab.Screen name="Prospect" component={ProspectStackNavigator} />
			<Tab.Screen name="Renewal" component={RenewalStackNavigator} />
		</Tab.Navigator>
	)
}

const PlacementTopTab = () => {
	return (
		<Tab.Navigator
			tabBarOptions={tabBarOptionsStyle}
			initialRouteName="Release">
			<Tab.Screen name="Release" component={ReleaseStackNavigator} />
			<Tab.Screen name="Placing" component={PlacingStackNavigator} />
			<Tab.Screen name="Quotation" component={QuotationStackNavigator} />
		</Tab.Navigator>
	)
}

export { ProspectTopTab, MaintenanceTopTab, PlacementTopTab }