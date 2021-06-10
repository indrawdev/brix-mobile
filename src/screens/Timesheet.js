import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const Timesheet = () => {
	const [loading, setLoading] = useState(true);
	const [dataSource, setDataSource] = useState([]);

	return (
		<TouchableOpacity>
			<View>
				<Text>Timesheet</Text>
			</View>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({

});

export default Timesheet;