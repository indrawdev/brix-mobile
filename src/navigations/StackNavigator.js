import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import {
	Acceptance,
	Cashless,
	CashlessDetail,
	ChangePass,
	Dashboard,
	Issue,
	Login,
	Pipeline,
	PipelineDetail,
	Placing,
	PlacingDetail,
	Profile,
	Proposal,
	ProposalDetail,
	Prospect,
	ProspectDetail,
	Quotation,
	QuotationDetail,
	Reimbursement,
	ReimbursementDetail,
	Release,
	ReleaseDetail,
	Renewal,
	RenewalDetail,
	Request,
	RequestDetail,
	Setting,
	Timesheet
} from '../screens';

import { COLORS } from '../constants';


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

const AcceptanceStackNavigator = () => {
	return (
		<Stack.Navigator screenOptions={{headerShown: false}}>
			<Stack.Screen name="Acceptance" component={Acceptance} />
		</Stack.Navigator>
	)
}

const ProposalStackNavigator = () => {
	return (
		<Stack.Navigator screenOptions={{headerShown: false}}>
			<Stack.Screen name="Proposal" component={Proposal} />
			<Stack.Screen name="Detail Proposal" component={ProposalDetail} />
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

const ReimbursementStackNavigator = () => {
	<Stack.Navigator screenOptions={{headerShown: false}}>
		<Stack.Screen name="Reimbursement" component={Reimbursement} />
		<Stack.Screen name="Reimbursement Detail" component={ReimbursementDetail} />
	</Stack.Navigator>
}

const CashlessStackNavigator = () => {
	<Stack.Navigator screenOptions={{headerShown: false}}>
		<Stack.Screen name="Cashless" component={Cashless} />
		<Stack.Screen name="Cashless Detail" component={CashlessDetail} />
	</Stack.Navigator>
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
	AcceptanceStackNavigator,
	ProposalStackNavigator,
	ReleaseStackNavigator,
	PlacingStackNavigator,
	QuotationStackNavigator,
	ReimbursementStackNavigator,
	CashlessStackNavigator,
	SettingStackNavigator,
}