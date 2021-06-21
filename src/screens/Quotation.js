import React, { useEffect, useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

const Quotation = () => {
	const [loading, setLoading] = useState(true);
	const [dataSource, setDataSource] = useState([]);

	return (
		<TouchableOpacity>
			<View>
				<Text>Quotation</Text>
			</View>
		</TouchableOpacity>
	);
};

export default Quotation;