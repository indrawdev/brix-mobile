import React, { useEffect, useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { SearchBar } from '../components';

const Pipeline = () => {
	const [isLoading, setLoading] = useState(true);
	const [data, setData] = useState([]);
	const [search, setSearch] = useState('');

	return (
		<TouchableOpacity>
			<View>
				<SearchBar
					label="Search"
					value={search}
					onChangeText={setSearch}
				/>
			</View>
		</TouchableOpacity>
	);
};

export default Pipeline;