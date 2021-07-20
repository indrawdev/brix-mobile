import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';

const Issue = () => {
	const [isLoading, setLoading] = useState(true);
	const [data, setData] = useState([]);

	return (
		<View>
			<Text>Issue</Text>
		</View>
	);
};

export default Issue;