import React from 'react';
import {
	StatusBar
} from 'react-native';
import { COLORS } from '../constants';

const StatusTopBar = ({ hidden }) => {
	return (
		<StatusBar
			animated={true}
			backgroundColor={COLORS.purple}
			barStyle="default"
			showHideTransition={1}
			hidden={hidden}
		/>
	)
}

export default StatusTopBar;

