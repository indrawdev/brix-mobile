import React, { useEffect, useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

const PlacingDetail = () => {
	const [loading, setLoading] = useState(true);
	const [dataSource, setDataSource] = useState([]);

	return (
		<TouchableOpacity>
			<View>
				<Text>Placing Detail</Text>
			</View>
		</TouchableOpacity>
	);
};

export default PlacingDetail;