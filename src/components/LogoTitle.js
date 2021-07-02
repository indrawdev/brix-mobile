import React from 'react';
import {
	View,
	Image
} from 'react-native';
import icons from '../constants/icons';
import { COLORS } from '../constants';

const LogoTitle = ({ navigation }) => {
	return (
		<View
			style={{
				alignItems: 'center',
				justifyContent: 'center',
				flex: 1
			}}
		>
			<Image
				style={{
					width: 20,
					height: 20,
					tintColor: COLORS.white
				}}
				source={icons.eye}
			/>
		</View>
	)
}

export default LogoTitle;