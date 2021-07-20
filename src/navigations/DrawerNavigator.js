import React from 'react';
import {
	createDrawerNavigator
} from '@react-navigation/drawer';
import BottomTabNavigator from '../navigations/BottomTabNavigator';
import { DrawerContent } from '../components';
import { DrawerIcon } from '../components';
import icons from '../constants/icons';

import {
	Acceptance
} from '../screens';

const Drawer = createDrawerNavigator();

const DrawerNavigator = props => {

	return (
		<Drawer.Navigator
			initialRouteName="Main"
			drawerPosition='left'
			drawerContentOptions={{
				activeTintColor: 'white',
				inactiveTintColor: 'white',
			}}
		>
			<Drawer.Screen
				name="Main"
				component={BottomTabNavigator}
				options={{
					title: 'Home',
					drawerIcon: ({ focused, size }) => (
						<DrawerIcon
							focused={focused} icon={icons.home} label="Home"
						/>
					),
				}}
			/>
			<Drawer.Screen
				name="Acceptance"
				component={Acceptance}
				options={{
					title: 'Acceptance',
					drawerIcon: ({ focused, size }) => (
						<DrawerIcon
							focused={focused} icon={icons.info} label="Acceptance"
						/>
					),
				}}
			/>
		</Drawer.Navigator>
	)
}

export default DrawerNavigator;
