import React, { useEffect, useState } from 'react';
import {
	SafeAreaView,
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	ActivityIndicator,
	FlatList,
	Alert
} from 'react-native';
import { ListItem, Avatar } from 'react-native-elements'


const Pipeline = () => {
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

	const ItemView = ({ item }) => {
		return (
			<ListItem bottomDivider>
				<Avatar
					size="small"
					rounded
					title={item.pipeline_code}
					onPress={() => { }}
					activeOpacity={0.7}
					source={{
						uri: 'https://randomuser.me/api/portraits/men/41.jpg',
					}}
				/>
				<ListItem.Content>
					<ListItem.Title style={styles.itemTitleText}>{item.company_name}</ListItem.Title>
					<ListItem.Subtitle style={styles.itemSubTitleText}>{item.head_office_address}</ListItem.Subtitle>
				</ListItem.Content>
				<ListItem.Chevron />
			</ListItem>

		)
	}


	const ItemSeparatorView = () => {
		return (
			<View style={styles.itemSeparatorView} />
		)
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
			<View style={styles.container}>
				<FlatList
					data={dataSource}
					keyExtractor={(item, index) => index.toString()}
					ItemSeparatorComponent={ItemSeparatorView}
					enableEmptySections={true}
					renderItem={ItemView}
					ListFooterComponent={renderFooter}
				/>
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
	}
});

export default Pipeline;