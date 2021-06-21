import React, { useEffect, useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

const CashlessDetail = () => {
	const [loading, setLoading] = useState(true);
	const [dataSource, setDataSource] = useState([]);

	return (
		<TouchableOpacity>
			<View>
				<Text>Cashless Detail</Text>
			</View>
		</TouchableOpacity>
	);
};

export default CashlessDetail;