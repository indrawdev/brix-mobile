import React, { useEffect, useState } from 'react';
import {
	Text,
	View,
	TouchableOpacity,
	StyleSheet,
	SafeAreaView,
	ScrollView
} from 'react-native';
import icons from '../constants/icons';
import images from '../constants/images';
import { COLORS, SIZES, FONTS } from '../constants';
import {
	HeaderBar,
	CurrencyLabel
} from '../components';

const CryptoDetail = ({ route, navigation }) => {
	const [loading, setLoading] = useState(true);

	const [selectedCurrency, setSelectedCurrency] = useState(null);

	useEffect(() => {
		const { currency } = route.params;
		setSelectedCurrency(currency);
	}, []);

	function renderChart() {
		return (
			<View style={{
				marginTop: SIZES.padding,
				marginHorizontal: SIZES.radius,
				alignItems: 'center',
				borderRadius: SIZES.radius,
				backgroundColor: COLORS.white,
				...styles.shadow
			}}>

				{/* Header */}
				<View style={{
					flexDirection: 'row',
					marginTop: SIZES.padding,
					paddingHorizontal: SIZES.padding
				}}>
					<View style={{ flex: 1 }}>
						<CurrencyLabel
							icon={selectedCurrency?.image}
							currency={selectedCurrency?.currency}
							code={selectedCurrency?.code}
						/>
					</View>
					<View>
						<Text style={{ ...FONTS.h3 }}>
							${selectedCurrency?.amount}
						</Text>
						<Text style={{ color: selectedCurrency?.type == 'I' ? COLORS.green : COLORS.red, ...FONTS.body3 }}>{selectedCurrency?.changes}</Text>
					</View>

				</View>

				{/* Chart */}

				{/* Options */}

				{/* Dots */}
			</View>
		)
	}

	return (
		<SafeAreaView style={{
			flex: 1,
			backgroundColor: COLORS.lightGray1
		}}>
			<HeaderBar
				right={true}
			/>
			<ScrollView>
				<View style={{ flex: 1, paddingBottom: SIZES.padding }}>
					{renderChart()}
				</View>
			</ScrollView>
		</SafeAreaView>
	)
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},
	shadow: {
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 4,
		},
		shadowOpacity: 0.30,
		shadowRadius: 4.65,
		elevation: 8,
	}
});

export default CryptoDetail;