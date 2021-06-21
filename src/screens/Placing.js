import React, { useEffect, useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

const Placing = () => {
	const [loading, setLoading] = useState(true);
	const [dataSource, setDataSource] = useState([]);

	return (
		<TouchableOpacity>
			<View>
				<Text>Placing</Text>
			</View>
		</TouchableOpacity>
	);
};

export default Placing;