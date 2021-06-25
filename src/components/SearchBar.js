import React from 'react';
import { View, Image, TextInput } from 'react-native';
import icons from '../constants/icons';
import { SIZES, FONTS, COLORS } from '../constants';


const SearchBar = ({ icon, currency, code }) => {
	return (
		<View
			style={{
				flexDirection: 'row',
				height: 50,
				alignItems: 'center',
				marginHorizontal: SIZES.padding,
				paddingHorizontal: SIZES.radius,
				borderRadius: 10,
				backgroundColor: COLORS.lightGray
			}}
		>
			<Image
				source={icons.search}
				style={{
					width: 20,
					height: 20,
					tintColor: COLORS.gray
				}}
			/>

			<TextInput
				style={{
					marginLeft: SIZES.radius,
					width: '100%',
					...FONTS.body3
				}}
				placeholderTextColor={COLORS.gray}
				placeholder="Search"
			/>
		</View>
	)
}

export default SearchBar;