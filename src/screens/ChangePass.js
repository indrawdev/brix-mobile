import React, { useEffect, useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

const ChangePass = () => {
	const [loading, setLoading] = useState(true);
	const [dataSource, setDataSource] = useState([]);

	return (
		<TouchableOpacity>
			<View>
				<Text>ChangePass</Text>
			</View>
		</TouchableOpacity>
	);
};

export default ChangePass;