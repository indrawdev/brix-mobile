import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const Dashboard = () => {
	const [isLoading, setLoading] = useState(true);
	const [data, setData] = useState([]);

	return (
		<TouchableOpacity>
			<View>
				<Text>Dashboard</Text>
			</View>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	
});

export default Dashboard;