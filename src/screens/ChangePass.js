import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';

const ChangePass = () => {
	const [loading, setLoading] = useState(true);
	const [dataSource, setDataSource] = useState([]);

	return (
		<View>
			<Text>ChangePass</Text>
		</View>
	);
};

export default ChangePass;