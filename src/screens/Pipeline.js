import React, { useEffect, useState, useRef } from 'react';
import {
	SafeAreaView,
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	ActivityIndicator,
	Alert,
	Animated,
	Image
} from 'react-native';

const BG_IMG = 'https://oswallpapers.com/wp-content/uploads/2020/06/2.jpg';
const ITEM_MARGIN_BOTTOM = 20;
const ITEM_PADDING = 10;
const HEIGHT_IMG = 100;

const ITEM_SIZE = HEIGHT_IMG + ITEM_PADDING * 2 + ITEM_MARGIN_BOTTOM;

const Pipeline = () => {

	const scrollY = useRef(new Animated.Value(0)).current;

	const [loading, setLoading] = useState(true);
	const [dataSource, setDataSource] = useState([]);

	useEffect(() => getData(), []);

	const getData = () => {
		setLoading(true);

		fetch('https://portal.integra.co.id/dummies/pipelines.json', {
			method: 'GET',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
			}
		})
			.then((response) => response.json())
			.then((json) => setDataSource(json.data.rows))
			.catch((error) => {
				console.error(error);
			})
			.finally(() => setLoading(false));
	}

	const renderFooter = () => {
		return (
			<View style={styles.footer}>
				<TouchableOpacity
					activeOpacity={0.9}
					onPress={getData}
					style={styles.loadMoreBtn}
				>
					<Text style={styles.btnText}>Load More</Text>
					{loading ? (
						<ActivityIndicator
							color="white"
							style={{ marginLeft: 8 }}
						/>
					) : null}
				</TouchableOpacity>
			</View>
		)
	}

	const renderItem = ({ item, index }) => {
		const scale = scrollY.interpolate({
			inputRange: [
				-1, 0,
				ITEM_SIZE * index,
				ITEM_SIZE * (index + 2)
			],
			outputRange: [1, 1, 1, 0]
		})
		return (
			<Animated.View style={[
				styles.item,
				{
					transform: [{ scale }]
				}
			]}>
				<Image
					style={styles.image}
					source={{ uri: '' }}
					resizeMode='contain'
				/>
				<View style={styles.wrapText}>
					<Text style={styles.fontSize}>
						{item.company_name}
					</Text>
				</View>
			</Animated.View>
		)
	}


	const ItemSeparatorView = () => {
		return (
			<View style={styles.itemSeparatorView} />
		)
	}

	const handleLoadMore = () => {

	}

	const getItem = (item) => {
		Alert.alert(
			item.company_name,
			item.pipeline_code,
			[
				{
					text: "Cancel",
					onPress: () => console.log("Cancel Pressed"),
					style: "cancel"
				},
				{ text: "OK", onPress: () => console.log("OK Pressed") }
			]
		);
	}

	return (
		<SafeAreaView style={{ flex: 1 }}>
			<Image
				source={{ uri: BG_IMG }}
				style={StyleSheet.absoluteFillObject}
				blurRadius={70}
			/>
			{loading ? <ActivityIndicator /> : (
				<Animated.View style={styles.container}>
					<Animated.FlatList
						data={dataSource}
						keyExtractor={item => item.pipeline_id}
						ItemSeparatorComponent={ItemSeparatorView}
						enableEmptySections={true}
						renderItem={renderItem}
						ListFooterComponent={renderFooter}
						refreshing={loading}
						onRefresh={getData}
						contentContainerStyle={{
							padding: 20
						}}
						onScroll={Animated.event(
							[{
								naviteEvent: {
									contentOffset: {
										y: scrollY
									}
								}
							}],
							{ useNativeDriver: false }
						)}
					/>
				</Animated.View>
			)}
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		justifyContent: 'center',
		flex: 1,
	},
	footer: {
		padding: 10,
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'row',
	},
	loadMoreBtn: {
		padding: 10,
		backgroundColor: '#800000',
		borderRadius: 4,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
	},
	itemTitleText: {
		fontFamily: 'Roboto-Regular',
		fontSize: 12,
	},
	itemSubTitleText: {
		fontFamily: 'Roboto-Italic',
		fontSize: 10,
	},
	btnText: {
		color: 'white',
		fontSize: 15,
		textAlign: 'center',
		fontFamily: 'Roboto-Black'
	},
	itemSeparatorView: {
		height: 0.5,
		width: '100%',
		backgroundColor: '#C8C8C8',
	},
	loader: {
		marginTop: 10,
		alignItems: 'center'
	},
	fontSize: {
		fontSize: 18
	},
	image: {
		width: 100,
		height: 100
	},
	wrapText: {
		flex: 1,
		marginLeft: 10,
		justifyContent: 'center'
	},
	item: {
		flexDirection: 'row',
		marginBottom: 20,
		borderRadius: 10,
		backgroundColor: '#fff',
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 10
		},
		shadowOpacity: .3,
		shadowRadius: 20,
		padding: 10
	}
});

export default Pipeline;