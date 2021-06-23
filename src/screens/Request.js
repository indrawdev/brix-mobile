import React, { useEffect, useState } from 'react';
import {
	SafeAreaView,
	View,
} from 'react-native';

const Request = () => {
	const [loading, setLoading] = useState(true);
	const [dataSource, setDataSource] = useState([]);

	return (
		<SafeAreaView>
			<View>
				<Text>Request</Text>
			</View>
		</SafeAreaView>
	);
};

export default Request;