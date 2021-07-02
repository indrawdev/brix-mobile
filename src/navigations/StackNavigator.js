import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import {
	Acceptance,
	Account,
	Cashless,
	CashlessDetail,
	ChangePass,
	Client,
	ClientDetail,
	CryptoDetail,
	Dashboard,
	Home,
	Issue,
	Notification,
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
	Timesheet,
	Transaction
} from '../screens';

import { COLORS, FONTS } from '../constants';
// import { LogoTitle, HeaderRight } from '../components';


const Stack = createStackNavigator();

const screenOptionStyle = {
	headerStyle: {
		backgroundColor: COLORS.primary,
	},
	headerTintColor: COLORS.white,
	headerTitleStyle: { ...FONTS.h2 }
}

const DashboardStackNavigator = () => {
	return (
		<Stack.Navigator screenOptions={screenOptionStyle}>
			<Stack.Screen
				name="Dashboard"
				component={Dashboard}
			/>
			<Stack.Screen
				name="Pipeline"
				component={Pipeline}
			/>
		</Stack.Navigator>
	)
}

const ClientStackNavigator = () => {
	return (
		<Stack.Navigator screenOptions={screenOptionStyle}>
			<Stack.Screen name="Client" component={Client} />
			<Stack.Screen name="ClientDetail" component={ClientDetail} />
		</Stack.Navigator>
	)
}


const NotificationStackNavigator = () => {
	return (
		<Stack.Navigator screenOptions={screenOptionStyle}>
			<Stack.Screen
				name="Notification"
				component={Notification}
			/>
		</Stack.Navigator>
	)
}

const PipelineStackNavigator = () => {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen name="Pipeline" component={Pipeline} />
			<Stack.Screen name="Detail Pipeline" component={PipelineDetail} />
		</Stack.Navigator>
	)
}

const RequestStackNavigator = () => {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen name="Request" component={Request} />
			<Stack.Screen name="Detail Request" component={RequestDetail} />
		</Stack.Navigator>
	)
}

const ProspectStackNavigator = () => {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen name="Prospect" component={Prospect} />
			<Stack.Screen name="Detail Prospect" component={ProspectDetail} />
		</Stack.Navigator>
	)
}

const RenewalStackNavigator = () => {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen name="Renewal" component={Renewal} />
			<Stack.Screen name="Detail Renewal" component={RenewalDetail} />
		</Stack.Navigator>
	)
}

const AcceptanceStackNavigator = () => {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen name="Acceptance" component={Acceptance} />
		</Stack.Navigator>
	)
}

const ProposalStackNavigator = () => {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen name="Proposal" component={Proposal} />
			<Stack.Screen name="Detail Proposal" component={ProposalDetail} />
		</Stack.Navigator>
	)
}

const ReleaseStackNavigator = () => {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen name="Release" component={Release} />
			<Stack.Screen name="Detail Release" component={ReleaseDetail} />
		</Stack.Navigator>
	)
}

const PlacingStackNavigator = () => {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen name="Placing" component={Placing} />
			<Stack.Screen name="Detail Placing" component={PlacingDetail} />
		</Stack.Navigator>
	)
}

const QuotationStackNavigator = () => {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen name="Quotation" component={Quotation} />
			<Stack.Screen name="Detail Quotation" component={QuotationDetail} />
		</Stack.Navigator>
	)
}

const ReimbursementStackNavigator = () => {
	<Stack.Navigator screenOptions={{ headerShown: false }}>
		<Stack.Screen name="Reimbursement" component={Reimbursement} />
		<Stack.Screen name="Reimbursement Detail" component={ReimbursementDetail} />
	</Stack.Navigator>
}

const CashlessStackNavigator = () => {
	<Stack.Navigator screenOptions={{ headerShown: false }}>
		<Stack.Screen name="Cashless" component={Cashless} />
		<Stack.Screen name="Cashless Detail" component={CashlessDetail} />
	</Stack.Navigator>
}

const AccountStackNavigator = () => {
	return (
		<Stack.Navigator screenOptions={screenOptionStyle}>
			<Stack.Screen name="Account" component={Account} />
		</Stack.Navigator>
	)
}

const CryptoStackNavigator = () => {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen name="Home" component={Home} />
			<Stack.Screen name="CryptoDetail" component={CryptoDetail} />
			<Stack.Screen name="Transaction" component={Transaction} />
		</Stack.Navigator>
	)
}

export {
	DashboardStackNavigator,
	ClientStackNavigator,
	NotificationStackNavigator,
	AccountStackNavigator,
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
	CryptoStackNavigator
}