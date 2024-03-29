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
	Employee,
	EmployeeDetail,
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
	TimesheetDetail,
	Transaction
} from '../screens';

import { COLORS, FONTS } from '../constants';

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
				component={PipelineStackNavigator}
			/>
			<Stack.Screen
				name="Request"
				component={RequestStackNavigator}
			/>
			<Stack.Screen
				name="Acceptance"
				component={AcceptanceStackNavigator}
			/>
			<Stack.Screen
				name="Release"
				component={ReleaseStackNavigator}
			/>
			<Stack.Screen
				name="Renewal"
				component={RenewalStackNavigator}
			/>
			<Stack.Screen
				name="Proposal"
				component={ProposalStackNavigator}
			/>
			<Stack.Screen
				name="Placing"
				component={PlacingStackNavigator}
			/>
			<Stack.Screen
				name="Quotation"
				component={QuotationStackNavigator}
			/>
		</Stack.Navigator>
	)
}

const ClientStackNavigator = () => {
	return (
		<Stack.Navigator screenOptions={screenOptionStyle}>
			<Stack.Screen name="Client" component={Client} />
			<Stack.Screen name="Client Detail" component={ClientDetail} />
		</Stack.Navigator>
	)
}

const EmployeeStackNavigator = () => {
	return (
		<Stack.Navigator screenOptions={screenOptionStyle}>
			<Stack.Screen name="Employee" component={Employee} />
			<Stack.Screen name="Employee Detail" component={EmployeeDetail} />
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

const TimesheetStackNavigator = () => {
	<Stack.Navigator screenOptions={{ headerShown: false }}>
		<Stack.Screen name="Timesheet" component={Timesheet} />
		<Stack.Screen name="Timesheet Detail" component={TimesheetDetail} />
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
	EmployeeStackNavigator,
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
	TimesheetStackNavigator,
	CryptoStackNavigator
}