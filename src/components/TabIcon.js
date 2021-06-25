import React from 'react';
import { Text, View, Image } from 'react-native';
import { SIZES, FONTS, COLORS } from '../constants';

const TabIcon = ({ focused, icon, label }) => {
	return (
		<View
			style={{
				alignItems: 'center',
				justifyContent: 'center',
				height: 80,
				width: 80
			}}
		>
			<Image
				source={icon}
				resizeMode="contain"
				style={{
					width: 25,
					height: 25,
					tintColor: focused ? COLORS.secondary : COLORS.black
				}}
			/>
			<Text
				style={{
					color: focused ? COLORS.secondary : COLORS.black,
					...FONTS.body5
				}}
			>{label}</Text>

			{focused && <View
				style={{
					position: "absolute",
					left: 0,
					right: 0,
					bottom: 0,
					height: 5,
					borderTopLeftRadius: 5,
					borderTopRightRadius: 5,
					backgroundColor: COLORS.secondary
				}}
			/>}

		</View>
	)
}

export default TabIcon;