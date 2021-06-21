import React, { useEffect, useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

const RequestDetail = () => {
	const [loading, setLoading] = useState(true);
	const [dataSource, setDataSource] = useState([]);

	return (
		<TouchableOpacity>
			<View>
				<Text>Request Detail</Text>
			</View>
		</TouchableOpacity>
	);
};

export default RequestDetail;