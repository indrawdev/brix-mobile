import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';

const CashlessDetail = () => {
	const [loading, setLoading] = useState(true);
	const [dataSource, setDataSource] = useState([]);

	return (
		<View>
			<Text>Cashless Detail</Text>
		</View>
	);
};

export default CashlessDetail;