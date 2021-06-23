import React, { useEffect, useState } from 'react';
import {
	SafeAreaView,
	View,
	Text,
	Image,
	FlatList,
	TouchableOpacity
} from "react-native"
import { Dimensions } from "react-native";
import { SIZES, FONTS } from '../constants'

const window = Dimensions.get("window");
const screen = Dimensions.get("screen");

const Dashboard = () => {
	const [isLoading, setLoading] = useState(true);
	const [dimensions, setDimensions] = useState({ window, screen });

	function renderHeader() {
		return (
			<View style={{ flexDirection: 'row', marginVertical: SIZES.padding * 2 }}>
				<Text></Text>
			</View>
		)
	}

	return (
		<TouchableOpacity>
			<View>
				<Text>Dashboard</Text>
			</View>
		</TouchableOpacity>
	);
};


export default Dashboard;