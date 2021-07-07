import React, { useEffect, useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

const EmployeeDetail = () => {
	const [isLoading, setLoading] = useState(true);
	const [data, setData] = useState([]);

	return (
		<TouchableOpacity>
			<View>
				<Text>Employee Detail</Text>
			</View>
		</TouchableOpacity>
	);
};

export default EmployeeDetail;