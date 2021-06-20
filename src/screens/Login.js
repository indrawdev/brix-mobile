import React, { useEffect, useState } from 'react';
import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	KeyboardAvoidingView,
	ScrollView,
	Platform
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient'
import { COLORS, SIZES, FONTS, icons, images } from "../constants"

const Login = ({ navigation }) => {

	const [showPassword, setShowPassword] = useState(false);
	const [loading, setLoading] = useState(true);

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	function renderHeader() {

	}

	function renderLogo() {

	}

	function renderForm() {

	}

	function renderButton() {

	}

	return (
		<KeyboardAvoidingView
			behavior={Platform.OS === "ios" ? "padding" : null}
			style={{ flex: 1 }}
		>
			<LinearGradient
				colors={[COLORS.lime, COLORS.emerald]}
				style={{ flex: 1 }}
			>
				<ScrollView>
					{renderHeader()}
					{renderLogo()}
					{renderForm()}
					{renderButton()}
				</ScrollView>
			</LinearGradient>

		</KeyboardAvoidingView>
	);
};

const styles = StyleSheet.create({
	container: {
		justifyContent: 'center',
		flex: 1,
	},
});

export default Login;