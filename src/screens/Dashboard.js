import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import {
	LineChart,
	BarChart,
	PieChart
} from "react-native-chart-kit";
import { Dimensions } from "react-native";

const window = Dimensions.get("window");
const screen = Dimensions.get("screen");


const chartConfig = {
	// backgroundGradientFromOpacity: 0,
	// backgroundGradientToOpacity: 0.5,
	color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
	strokeWidth: 1, // optional, default 3
	barPercentage: 0.5,
	useShadowColorFromDataset: true // optional
};

const data = {
	labels: ["January", "February", "March", "April", "May", "June"],
	datasets: [
		{
			data: [20, 45, 28, 80, 99, 43],
			// color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
			strokeWidth: 2 // optional
		}
	],
	legend: ["Rainy Days"] // optional
};

const Dashboard = () => {
	const [isLoading, setLoading] = useState(true);
	const [dataLine, setDataLine] = useState([]);
	const [dimensions, setDimensions] = useState({ window, screen });

	const onChange = ({ window, screen }) => {
    setDimensions({ window, screen });
	};
	
	const getData = fetch()

	useEffect(() => {
		Dimensions.addEventListener("change", onChange);
		return () => {
			Dimensions.removeEventListener("change", onChange);
		};
	});



	return (
		<TouchableOpacity>
			<View style={styles.container}>
				<LineChart
					data={data}
					width={dimensions.screen.width}
					height={220}
					chartConfig={chartConfig}
				/>
			</View>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	container: {
		justifyContent: 'center',
		flex: 1,
	}
});

export default Dashboard;