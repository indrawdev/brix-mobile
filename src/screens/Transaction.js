import React, { useEffect, useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

const Transaction = ({ navigation }) => {
	const [loading, setLoading] = useState(true);
	const [dataSource, setDataSource] = useState([]);

	return (
		<TouchableOpacity>
			<View>
				<Text>Transaction</Text>
			</View>
		</TouchableOpacity>
	);
};

export default Transaction;