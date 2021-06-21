import React, { useEffect, useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

const QuotationDetail = () => {
	const [loading, setLoading] = useState(true);
	const [dataSource, setDataSource] = useState([]);

	return (
		<TouchableOpacity>
			<View>
				<Text>Quotation Detail</Text>
			</View>
		</TouchableOpacity>
	);
};

export default QuotationDetail;