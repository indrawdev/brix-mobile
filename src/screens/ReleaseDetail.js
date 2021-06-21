import React, { useEffect, useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

const ReleaseDetail = () => {
	const [loading, setLoading] = useState(true);
	const [dataSource, setDataSource] = useState([]);

	return (
		<TouchableOpacity>
			<View>
				<Text>Release Detail</Text>
			</View>
		</TouchableOpacity>
	);
};


export default ReleaseDetail;