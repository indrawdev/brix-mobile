import React, { useEffect, useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

const ProposalDetail = () => {
	const [loading, setLoading] = useState(true);
	const [dataSource, setDataSource] = useState([]);

	return (
		<TouchableOpacity>
			<View>
				<Text>Proposal Detail</Text>
			</View>
		</TouchableOpacity>
	);
};

export default ProposalDetail;