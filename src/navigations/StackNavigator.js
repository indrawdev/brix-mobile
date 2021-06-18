import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Dashboard from '../screens/Dashboard';

import Pipeline from '../screens/Pipeline';
import PipelineDetail from '../screens/PipelineDetail';

import Request from '../screens/Request';
import RequestDetail from '../screens/RequestDetail';

import Prospect from '../screens/Prospect';
import ProspectDetail from '../screens/ProspectDetail';

import Renewal from '../screens/Renewal';
import RenewalDetail from '../screens/RenewalDetail';

import Release from '../screens/Release';
import ReleaseDetail from '../screens/ReleaseDetail';

import Placing from '../screens/Placing';
import PlacingDetail from '../screens/PlacingDetail';

import Quotation from '../screens/Quotation';
import QuotationDetail from '../screens/QuotationDetail';

import Setting from '../screens/Setting';
import Profile from '../screens/Profile';
import ChangePass from '../screens/ChangePass';

import { COLORS } from '../constants/theme';


const Stack = createStackNavigator()

const screenOptionStyle = {
	headerStyle: {
		backgroundColor: COLORS.purple,
	},
	headerTintColor: COLORS.white,
	headerTitleStyle: {
		alignSelf: 'center',
		fontWeight: 'normal',
		fontFamily: 'Roboto-Bold'
	}
}

const DashboardStackNavigator = () => {
	return (
		<Stack.Navigator screenOptions={screenOptionStyle}>
			<Stack.Screen name="Dashboard" component={Dashboard} />
		</Stack.Navigator>
	)
}

const PipelineStackNavigator = () => {
	return (
		<Stack.Navigator screenOptions={{headerShown: false}}>
			<Stack.Screen name="Pipeline" component={Pipeline} />
			<Stack.Screen name="Detail Pipeline" component={PipelineDetail} />
		</Stack.Navigator>
	)
}

const RequestStackNavigator = () => {
	return (
		<Stack.Navigator screenOptions={{headerShown: false}}>
			<Stack.Screen name="Request" component={Request} />
			<Stack.Screen name="Detail Request" component={RequestDetail} />
		</Stack.Navigator>
	)
}

const ProspectStackNavigator = () => {
	return (
		<Stack.Navigator screenOptions={{headerShown: false}}>
			<Stack.Screen name="Prospect" component={Prospect} />
			<Stack.Screen name="Detail Prospect" component={ProspectDetail} />
		</Stack.Navigator>
	)
}

const RenewalStackNavigator = () => {
	return (
		<Stack.Navigator screenOptions={{headerShown: false}}>
			<Stack.Screen name="Renewal" component={Renewal} />
			<Stack.Screen name="Detail Renewal" component={RenewalDetail} />
		</Stack.Navigator>
	)
}

const ReleaseStackNavigator = () => {
	return (
		<Stack.Navigator screenOptions={{headerShown: false}}>
			<Stack.Screen name="Release" component={Release} />
			<Stack.Screen name="Detail Release" component={ReleaseDetail} />
		</Stack.Navigator>
	)
}

const PlacingStackNavigator = () => {
	return (
		<Stack.Navigator screenOptions={{headerShown: false}}>
			<Stack.Screen name="Placing" component={Placing} />
			<Stack.Screen name="Detail Placing" component={PlacingDetail} />
		</Stack.Navigator>
	)
}

const QuotationStackNavigator = () => {
	return (
		<Stack.Navigator screenOptions={{headerShown: false}}>
			<Stack.Screen name="Quotation" component={Quotation} />
			<Stack.Screen name="Detail Quotation" component={QuotationDetail} />
		</Stack.Navigator>
	)
}

const SettingStackNavigator = () => {
	return (
		<Stack.Navigator screenOptions={screenOptionStyle}>
			<Stack.Screen name="Setting" component={Setting} />
			<Stack.Screen name="Profile" component={Profile} />
			<Stack.Screen name="ChangePass" component={ChangePass} />
		</Stack.Navigator>
	)
}

export {
	DashboardStackNavigator,
	PipelineStackNavigator,
	RequestStackNavigator,
	ProspectStackNavigator,
	RenewalStackNavigator,
	ReleaseStackNavigator,
	PlacingStackNavigator,
	QuotationStackNavigator,
	SettingStackNavigator
}