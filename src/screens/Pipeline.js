import React, { useEffect, useState } from 'react';
import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	ActivityIndicator,
	FlatList
} from 'react-native';

const Pipeline = () => {
	const [loading, setLoading] = useState(true);
	const [dataSource, setDataSource] = useState([]);

	useEffect(() => getData(), []);

	const getData = () => {
		setLoading(true);

		fetch('https://aboutreact.herokuapp.com')
			.then((response) => response.json())
			.then((responseJson) => {
				setDataSource([...dataSource, ...responseJson.results]);
				setLoading(false);
			})
			.catch((error) => {
				console.error(error);
			})
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

	const ItemView = ({ item }) => {
		return (
			<Text
				style={styles.itemStyle}
				onPress={() => getItem(item)}>{item.id}{'.'}{item.title.toUpperCase()}
			</Text>
		)
	}

	const ItemSeparatorView = () => {
		return (
			<View style={styles.itemSeparatorView} />
		)
	}

	const getItem = (item) => {
		alert('Id : ' + item.id + ' Title : ' + item.title)
	}

	return (
		<SafeAreaView style={{ flex: 1 }}>
			<View style={styles.container}>
				{loading ? (
					<FlatList
						data={dataSource}
						keyExtractor={(item, index) => index.toString()}
						ItemSeparatorComponent={ItemSeparatorView}
						enableEmptySections={true}
						renderItem={ItemView}
						ListFooterComponent={renderFooter}
					/>
				) : <Text>Empty</Text>}
			</View>
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
	btnText: {
		color: 'white',
		fontSize: 15,
		textAlign: 'center',
	},
	itemSeparatorView: {
		height: 0.5,
		width: '100%',
		backgroundColor: '#C8C8C8',
	}
});

export default Pipeline;