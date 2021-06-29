import React, { useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

const TimesheetDetail = () => {
	const [loading, setLoading] = useState(true);
	const [dataSource, setDataSource] = useState([]);

	return (
		<TouchableOpacity>
			<View>
				<Text>Timesheet Detail</Text>
			</View>
		</TouchableOpacity>
	);
};

export default TimesheetDetail;