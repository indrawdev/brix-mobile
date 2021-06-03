import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'

const Tab = createMaterialTopTabNavigator()

const CommentTopTab = () => {
	return (
		<Tab.Navigator>
			{/* <Tab.Screen name="TabA" component={TabATop} />
			<Tab.Screen name="TabB" component={TabBTop} /> */}
		</Tab.Navigator>
	)
}

const ReviewTopTab = () => {
	return (
		<Tab.Navigator>
			{/* <Tab.Screen name="TabA" component={TabATop} />
			<Tab.Screen name="TabB" component={TabBTop} /> */}
		</Tab.Navigator>
	)
}

export { CommentTopTab, ReviewTopTab }