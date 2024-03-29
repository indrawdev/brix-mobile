import React, { useState, useLayoutEffect } from 'react';
import {
	SafeAreaView,
	View,
	Text,
	Image,
	FlatList,
	TouchableOpacity,
} from "react-native";
import icons from '../constants/icons';
import images from '../constants/images';
import { SIZES, FONTS, COLORS } from '../constants';
import { specialPromoData } from '../shared/dummy';
import { MenuIcon, StatusTopBar, LogoTitle } from '../components';
import NavigationDrawer from '../components/NavigationDrawer';
import * as authActions from '../redux/actions/auth';

const Dashboard = props => {
	const [isLoading, setIsLoading] = useState(true);
	const [email, setEmail] = useState('');
	const [specialPromos, setspecialPromos] = useState(specialPromoData);

	const logoutHandler = async () => {
		let action = authActions.logout();
		props.navigation.navigate('Login')
		try {
      await dispatch(action);
    } catch (err) {
      setError(err.message);
      setIsLoading(false);
    }
	}

	useLayoutEffect(() => {
		props.navigation.setOptions({
			headerTitle: props => <LogoTitle {...props} />,
			headerLeft: () => (
				<NavigationDrawer {...props} />
			),
		})
	}, [props.navigation])


	function renderHeader() {
		return (
			<View style={{ flexDirection: 'row', marginVertical: SIZES.padding * 2 }}>
				<View style={{ flex: 1 }}>
					<Text style={{ ...FONTS.h1 }}>Hello!</Text>
					<Text style={{ ...FONTS.body2, color: COLORS.gray }}>{email}</Text>
				</View>
				<View style={{ alignItems: 'center', justifyContent: 'center' }}>
					<TouchableOpacity
						style={{
							height: 40,
							width: 40,
							justifyContent: 'center',
							alignItems: 'center',
							backgroundColor: COLORS.white
						}}
						onPress={() => logoutHandler()}
					>
						<Image
							source={icons.bell}
							style={{
								width: 20,
								height: 20,
								tintColor: COLORS.primary
							}}
						/>
						<View
							style={{
								position: 'absolute',
								top: -5,
								right: -5,
								height: 10,
								width: 10,
								backgroundColor: COLORS.red,
								borderRadius: 5
							}}
						>
						</View>
					</TouchableOpacity>
				</View>
			</View>

		)
	}

	function renderFeatures() {
		return (
			<MenuIcon {...props} />
		)
	}

	function renderPromos() {

		const HeaderComponent = () => (
			<View>
				{renderHeader()}
				{renderFeatures()}
				{renderPromoHeader()}
			</View>
		)

		const renderPromoHeader = () => (
			<View
				style={{
					flexDirection: 'row',
					marginBottom: SIZES.padding
				}}
			>
				<View style={{ flex: 1 }}>
					<Text style={{ ...FONTS.h3 }}>Special Promos</Text>
				</View>
				<TouchableOpacity
					onPress={() => console.log("View All")}
				>
					<Text style={{ color: COLORS.gray, ...FONTS.body4 }}>View All</Text>
				</TouchableOpacity>
			</View>
		)

		const renderItem = ({ item }) => (
			<TouchableOpacity
				style={{
					marginVertical: SIZES.base,
					width: SIZES.width / 2.5
				}}
				onPress={() => console.log(item.title)}
			>
				<View
					style={{
						height: 80,
						borderTopLeftRadius: 20,
						borderTopRightRadius: 20,
						backgroundColor: COLORS.primary
					}}
				>
					<Image
						source={images.promoBanner}
						resizeMode="cover"
						style={{
							width: "100%",
							height: "100%",
							borderTopLeftRadius: 20,
							borderTopRightRadius: 20
						}}
					/>
				</View>

				<View
					style={{
						padding: SIZES.padding,
						backgroundColor: COLORS.lightGray,
						borderBottomLeftRadius: 20,
						borderBottomRightRadius: 20
					}}
				>
					<Text style={{ ...FONTS.h4 }}>{item.title}</Text>
					<Text style={{ ...FONTS.body4 }}>{item.description}</Text>
				</View>
			</TouchableOpacity>
		)

		return (
			<FlatList
				ListHeaderComponent={HeaderComponent}
				contentContainerStyle={{ paddingHorizontal: SIZES.padding * 3 }}
				numColumns={2}
				columnWrapperStyle={{ justifyContent: 'space-between' }}
				data={specialPromos}
				keyExtractor={item => `${item.id}`}
				renderItem={renderItem}
				showsVerticalScrollIndicator={false}
				ListFooterComponent={
					<View style={{ marginBottom: 80 }}>
					</View>
				}
			/>
		)
	}

	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
			<StatusTopBar
				hidden={false}
			/>
			{renderPromos()}
		</SafeAreaView>
	);
};

export default Dashboard;