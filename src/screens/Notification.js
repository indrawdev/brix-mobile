import React, { useEffect, useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

const Notification = () => {
	const [isLoading, setLoading] = useState(true);
	const [data, setData] = useState([]);

	return (
		<TouchableOpacity>
			<View>
				<Text>Notification</Text>
			</View>
		</TouchableOpacity>
	);
};

export default Notification;