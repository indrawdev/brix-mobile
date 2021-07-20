import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';

const Account = () => {
	const [loading, setLoading] = useState(true);
	const [dataSource, setDataSource] = useState([]);

	return (
		<View>
			<Text>Account</Text>
		</View>
	);
};

export default Account;