import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {
	Dashboard,
	Acceptance
} from '../screens';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
	return (
		<Drawer.Navigator
			initialRouteName="Dashboard">
			<Drawer.Screen name="Dashboard" component={Dashboard} />
			<Drawer.Screen name="Acceptance" component={Acceptance} />
		</Drawer.Navigator>
	)
}

export default DrawerNavigator;
