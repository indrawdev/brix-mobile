import React from 'react';
import { Text, View, Image } from 'react-native';
import { SIZES, FONTS, COLORS } from '../constants';

const DrawerIcon = ({ focused, icon, label }) => {
	return (
		<View style={{
			flex: 1,
			flexDirection: 'row'
		}}>
			<Image
				source={icon}
				resizeMode="contain"
				style={{
					width: 20,
					height: 20,
					tintColor: focused ? COLORS.primary : COLORS.secondary
				}}
			/>
			<Text style={{ color: COLORS.black, paddingLeft: 15 }}>{label}</Text>
		</View>
	)
}

export default DrawerIcon;