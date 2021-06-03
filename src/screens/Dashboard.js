import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Dashboard = () => {
	const [isLoading, setLoading] = useState(true);
	const [data, setData] = useState([]);

	return (
		<View>
			<Text>Dashboard</Text>
		</View>
	);
};

const styles = StyleSheet.create({

});

export default Dashboard;