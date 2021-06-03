import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Request = () => {
	const [isLoading, setLoading] = useState(true);
	const [data, setData] = useState([]);

	return (
		<View>
			<Text>Request</Text>
		</View>
	);
};

const styles = StyleSheet.create({

});

export default Request;