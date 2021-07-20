import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';

const ProposalDetail = () => {
	const [loading, setLoading] = useState(true);
	const [dataSource, setDataSource] = useState([]);

	return (
		<View>
			<Text>Proposal Detail</Text>
		</View>
	);
};

export default ProposalDetail;