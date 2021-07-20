import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';

const EmployeeDetail = () => {
	const [isLoading, setLoading] = useState(true);
	const [data, setData] = useState([]);

	return (
		<View>
			<Text>Employee Detail</Text>
		</View>
	);
};

export default EmployeeDetail;