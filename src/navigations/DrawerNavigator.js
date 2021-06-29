import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { BottomTabNavigator } from './BottomTabNavigator';
import {
	Acceptance
} from '../screens';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
	return (
		<Drawer.Navigator>
			<Drawer.Screen name="Dashboard" component={BottomTabNavigator} />
			<Drawer.Screen name="Acceptance" component={Acceptance} />
		</Drawer.Navigator>
	)
}

export default DrawerNavigator;
