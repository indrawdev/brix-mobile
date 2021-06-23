import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import {
	PipelineStackNavigator,
	RequestStackNavigator,
	ProspectStackNavigator,
	RenewalStackNavigator,
	ReleaseStackNavigator,
	PlacingStackNavigator,
	QuotationStackNavigator,
	ReimbursementStackNavigator,
	CashlessStackNavigator
} from './StackNavigator';

import { COLORS } from '../constants';

const Tab = createMaterialTopTabNavigator()

const tabBarOptionsStyle = {
	labelStyle: {
		alignSelf: 'center',
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

const ClaimTopTab = () => {
	return (
		<Tab.Navigator
			tabBarOptions={tabBarOptionsStyle}
			initialRouteName="Reimbursement">
			<Tab.Screen name="Reimbursement" component={ReimbursementStackNavigator} />
			<Tab.Screen name="Cashless" component={CashlessStackNavigator} />
		</Tab.Navigator>
	)
}

export {
	ProspectTopTab,
	MaintenanceTopTab,
	PlacementTopTab,
	ClaimTopTab
}