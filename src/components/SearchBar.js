import React from 'react';
import { View, Image, TextInput } from 'react-native';
import icons from '../constants/icons';
import { SIZES, FONTS, COLORS } from '../constants';


const SearchBar = ({ label, value, onChangeText }) => {
	return (
		<View style={{
			backgroundColor: COLORS.purple,
			padding: SIZES.padding
		}}>
		<View
			style={{
				flexDirection: 'row',
				height: 50,
				alignItems: 'center',
				marginHorizontal: SIZES.padding / 2,
				paddingHorizontal: SIZES.radius / 2,
				borderRadius: 3,
				backgroundColor: COLORS.lightpurple
			}}
		>
			<Image
				source={icons.search}
				style={{
					width: 20,
					height: 20,
					tintColor: COLORS.white
				}}
			/>

			<TextInput
					style={{
						marginLeft: SIZES.radius / 2,
						width: '100%',
						...FONTS.body3,
						color: COLORS.white
					}}
					placeholderTextColor={COLORS.gray}
					placeholder={label}
					value={value}
					onChangeText={ onChangeText}
			/>
		</View>
		</View>
		
	)
}

export default SearchBar;