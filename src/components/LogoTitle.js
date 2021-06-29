import React from 'react';
import {
	Image
} from 'react-native';
import icons from '../constants/icons';
import { COLORS } from '../constants';

const LogoTitle = ({ navigation }) => {
	return (
    <Image
			style={{
				width: 20,
				height: 20,
				tintColor: COLORS.white
			}}
      source={icons.eye }
    />
  )
}

export default LogoTitle;