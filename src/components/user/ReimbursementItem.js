import React from 'react';
import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
	TouchableNativeFeedback,
	Platform
} from 'react-native';

import Card from '../UI/Card';
import { COLORS, FONTS } from '../../constants';

const ReimbursementItem = props => {
	let TouchableCmp = TouchableOpacity;

	if (Platform.OS === 'android' && Platform.Version >= 21) {
		TouchableCmp = TouchableNativeFeedback;
	}

	return (
		<Card style={styles.reimbursement}>
			<View style={styles.touchable}>
				<TouchableCmp onPress={props.onSelect} useForeground>
					<View style={styles.details}>
						<Text style={{ color: COLORS.black, ...FONTS.body4 }}>{props.name}</Text>
						<Text style={{ color: COLORS.black, ...FONTS.body4 }}>{props.type}</Text>
						<Text style={{ color: COLORS.black, ...FONTS.body4 }}>{props.code}</Text>
					</View>
				</TouchableCmp>
			</View>
		</Card>
	)
}

const styles = StyleSheet.create({
	reimbursement: {
		margin: 20
	},
	touchable: {
		borderRadius: 10,
	},
	imageContainer: {
		width: '100%',
		height: '60%',
		borderTopLeftRadius: 10,
		borderTopRightRadius: 10,
		overflow: 'hidden'
	},
	image: {
		width: '100%',
		height: '100%'
	},
	details: {
		alignItems: 'center',
		padding: 10
	},
	actions: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		height: '23%',
		paddingHorizontal: 20
	}
});

export default ReimbursementItem;