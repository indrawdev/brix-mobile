import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const Login = () => {
	const [isLoading, setLoading] = useState(true);
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	return (
		<View>
			<Text>Login</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		justifyContent: 'center',
		flex: 1,
	},
});

export default Login;