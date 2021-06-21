import React, { useEffect, useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

const Acceptance = () => {
	const [isLoading, setLoading] = useState(true);
	const [data, setData] = useState([]);

	return (
		<TouchableOpacity>
			<View>
				<Text>Acceptance</Text>
			</View>
		</TouchableOpacity>
	);
};

export default Acceptance;