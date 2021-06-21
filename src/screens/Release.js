import React, { useEffect, useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

const Release = () => {
	const [loading, setLoading] = useState(true);
	const [dataSource, setDataSource] = useState([]);

	return (
		<TouchableOpacity>
			<View>
				<Text>Release</Text>
			</View>
		</TouchableOpacity>
	);
};

export default Release;