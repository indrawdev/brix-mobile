import React, { useEffect, useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

const ReimbursementDetail = () => {
	const [loading, setLoading] = useState(true);
	const [dataSource, setDataSource] = useState([]);

	return (
		<TouchableOpacity>
			<View>
				<Text>Reimbursement Detail</Text>
			</View>
		</TouchableOpacity>
	);
};

export default ReimbursementDetail;