import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';

import icons from '../constants/icons';
import { COLORS } from '../constants';

const HeaderLeft = ({ navigation }) => {
	return (
		<View style={{ flexDirection: 'row' }}>
			 <TouchableOpacity
        	onPress={ () =>{ navigation.toggleDrawer()}}>
				<Image style={{ width: 20, height: 20, tintColor: COLORS.white}} source={icons.drawer}/>
        </TouchableOpacity>
		</View>
	)
}

export default HeaderLeft;