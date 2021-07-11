import React from 'react';
import {
	createDrawerNavigator
} from '@react-navigation/drawer';
import BottomTabNavigator from '../navigations/BottomTabNavigator';
import { DrawerContent } from '../components';

import {
	Acceptance
} from '../screens';

const Drawer = createDrawerNavigator();

const DrawerNavigator = props => {

	return (
		<Drawer.Navigator>
			<Drawer.Screen name="Main" component={BottomTabNavigator} />
			<Drawer.Screen name="Acceptance" component={Acceptance} />
		</Drawer.Navigator>
	)
}

export default DrawerNavigator;
