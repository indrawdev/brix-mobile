import React, { useEffect, useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { SearchBar } from '../components';

const Pipeline = () => {
	const [isLoading, setLoading] = useState(true);
	const [data, setData] = useState([]);

	return (
		<TouchableOpacity>
			<View>
				<SearchBar />
			</View>
		</TouchableOpacity>
	);
};

export default Pipeline;