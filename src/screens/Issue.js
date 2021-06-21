import React, { useEffect, useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

const Issue = () => {
	const [isLoading, setLoading] = useState(true);
	const [data, setData] = useState([]);

	return (
		<TouchableOpacity>
			<View>
				<Text>Issue</Text>
			</View>
		</TouchableOpacity>
	);
};

export default Issue;