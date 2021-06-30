import React, { useEffect, useState } from 'react';
import { Text, View, TouchableOpacity, FlatList, Platform } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/UI/HeaderButton';

const Client = props => {
	const [isLoading, setIsLoading] = useState(false);
	const [isRefreshing, setIsRefreshing] = useState(false);

	return (
		<TouchableOpacity>
			<View>
				<Text>Client</Text>
			</View>
		</TouchableOpacity>
	);
};

Client.navigationOptions = navData => {
	return {
		headerTitle: 'All Client',
		headerLeft: (
			<HeaderButtons HeaderButtonComponent={HeaderButton}>
				<Item
					title="Menu"
					iconName={Platform.OS === 'android' ? 'md-menu' : 'ios-menu'}
					onPress={() => {
						navData.navigation.toggleDrawer();
					}}
				/>
			</HeaderButtons>
		),
		headerRight: (
			<HeaderButtons HeaderButtonComponent={HeaderButton}>
				<Item
					title="Cart"
					iconName={Platform.OS === 'android' ? 'md-cart' : 'ios-cart'}
					onPress={() => {
						navData.navigation.navigate('Cart');
					}}
				/>
			</HeaderButtons>
		)
	};
};

export default Client;