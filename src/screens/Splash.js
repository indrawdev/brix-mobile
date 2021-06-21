import React, { useEffect, useState } from 'react';
import {Text, View, TouchableOpacity } from 'react-native';

const Splash = () => {
	const [loading, setLoading] = useState(true);

	return (
		<View>
			<Text>Splash</Text>
		</View>
	);
};

export default Splash;