import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Quotation = () => {
	const [isLoading, setLoading] = useState(true);
	const [data, setData] = useState([]);

	return (
		<View>
			<Text>Quotation</Text>
		</View>
	);
};

const styles = StyleSheet.create({

});

export default Quotation;