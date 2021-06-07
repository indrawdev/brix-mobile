import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Splash = () => {
	const [isLoading, setLoading] = useState(true);
	const [data, setData] = useState([]);

	return (
		<View>
			<Text>Splash</Text>
		</View>
	);
};

const styles = StyleSheet.create({

});

export default Splash;