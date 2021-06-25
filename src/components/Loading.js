import React from 'react';
import {
	ActivityIndicator,
	StyleSheet,
	Text,
	View,
} from 'react-native';
import { FONTS, COLORS } from '../constants';

const Loading = () => {
	return (
		<View style={styles.loadingView} >
			<ActivityIndicator size="large" color={COLORS.primary} />
			<Text style={styles.loadingText}>Loading . . .</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	loadingView: {
		alignItems: 'center',
		justifyContent: 'center',
		flex: 1
	},
	loadingText: {
		color: COLORS.primary,
		...FONTS.h3
	}
});

export default Loading;