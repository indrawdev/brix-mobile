import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const Issue = () => {
	const [isLoading, setLoading] = useState(true);
	const [data, setData] = useState([]);

	return (
		<TouchableOpacity>
			<View>
				<Text>Issue</Text>
			</View>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({

});

export default Issue;