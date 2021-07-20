import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';

const Cashless = () => {
	const [loading, setLoading] = useState(true);
	const [dataSource, setDataSource] = useState([]);

	return (
		<View>
			<Text>Cashless</Text>
		</View>
	);
};

export default Cashless;