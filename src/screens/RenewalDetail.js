import React, { useEffect, useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

const RenewalDetail = () => {
	const [loading, setLoading] = useState(true);
	const [dataSource, setDataSource] = useState([]);

	return (
		<TouchableOpacity>
			<View>
				<Text>RenewalDetail</Text>
			</View>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	container: {
		justifyContent: 'center',
		flex: 1,
	}
});

export default RenewalDetail;