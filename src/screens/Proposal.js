import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const Proposal = () => {
	const [loading, setLoading] = useState(true);
	const [dataSource, setDataSource] = useState([]);

	return (
		<TouchableOpacity>
			<View>
				<Text>Proposal</Text>
			</View>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({

});

export default Proposal;