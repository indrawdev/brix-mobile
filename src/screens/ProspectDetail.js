import React, { useEffect, useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

const ProspectDetail = () => {
	const [loading, setLoading] = useState(true);
	const [dataSource, setDataSource] = useState([]);

	return (
		<TouchableOpacity>
			<View>
				<Text>ProspectDetail</Text>
			</View>
		</TouchableOpacity>
	);
};


export default ProspectDetail;