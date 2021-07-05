import React from 'react';
import {
	createDrawerNavigator,
	DrawerContentScrollView,
	DrawerItemList,
} from '@react-navigation/drawer';
import BottomTabNavigator from '../navigations/BottomTabNavigator';

import {
	Acceptance
} from '../screens';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
	return (
		<Drawer.Navigator>
			<Drawer.Screen name="Main" component={BottomTabNavigator} />
			<Drawer.Screen name="Acceptance" component={Acceptance} />
		</Drawer.Navigator>
	)
}

export default DrawerNavigator;
