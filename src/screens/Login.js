import React, { useEffect, useState } from 'react';
import {
	View,
	Text,
	TouchableOpacity,
	Image,
	TextInput,
	KeyboardAvoidingView,
	ScrollView,
	Platform
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import images from '../constants/images';
import { COLORS, SIZES, FONTS } from '../constants';
import { useSelector } from 'react-redux';

const Login = ({ navigation }) => {

	const globalState = useSelector(state => state);

	const [form, setForm] = useState({
		'email': '',
		'password': ''
	});

	const sendData = () => {
		console.log('sending', form)
	}

	const onInputChange = (value, input) => {
		setForm({
			...form,
			[input]: value,
		});
	}

	const [showPassword, setShowPassword] = useState(false);
	const [areas, setAreas] = useState([]);
	const [modalVisible, setModalVisible] = useState(false)

	function renderHeader() {
		return (
			<TouchableOpacity
				style={{
					flexDirection: 'row',
					alignItems: "center",
					marginTop: SIZES.padding * 6,
					paddingHorizontal: SIZES.padding * 2
				}}
				onPress={() => console.log("Login")}
			>
				<Text style={{ marginLeft: SIZES.padding * 1.5, color: COLORS.white, ...FONTS.h4, textAlign: 'center' }}>BRIX</Text>
			</TouchableOpacity>
		)
	}

	function renderLogo() {
		return (
			<View
				style={{
					marginTop: SIZES.padding * 5,
					height: 100,
					alignItems: 'center',
					justifyContent: 'center'
				}}
			>
				<Image
					source={images.integra}
					resizeMode="contain"
					style={{
						width: "60%"
					}}
				/>
			</View>
		)
	}

	function renderForm() {
		return (
			<View
				style={{
					marginTop: SIZES.padding * 3,
					marginHorizontal: SIZES.padding * 3,
				}}
			>
				{/* Email */}
				<View style={{ marginTop: SIZES.padding * 3 }}>
					<Text style={{ color: COLORS.lightGreen, ...FONTS.body3 }}>Email</Text>
					<TextInput
						style={{
							marginVertical: SIZES.padding,
							borderBottomColor: COLORS.white,
							borderBottomWidth: 1,
							height: 40,
							color: COLORS.white,
							...FONTS.body3
						}}
						placeholder="Email"
						placeholderTextColor={COLORS.white}
						selectionColor={COLORS.white}
						value={form.email}
						onChangeText={value => onInputChange(value, 'email')}
					/>
				</View>

				{/* Password */}
				<View style={{ marginTop: SIZES.padding * 2 }}>
					<Text style={{ color: COLORS.lightGreen, ...FONTS.body3 }}>Password</Text>
					<TextInput
						style={{
							marginVertical: SIZES.padding,
							borderBottomColor: COLORS.white,
							borderBottomWidth: 1,
							height: 40,
							color: COLORS.white,
							...FONTS.body3
						}}
						placeholder="Enter Password"
						placeholderTextColor={COLORS.white}
						selectionColor={COLORS.white}
						secureTextEntry={!showPassword}
						value={form.password}
						onChangeText={value => onInputChange(value, 'password')}
					/>

				</View>
			</View>
		)
	}

	function renderButton() {
		return (
			<View style={{ margin: SIZES.padding * 3 }}>
				<TouchableOpacity style={{
					height: 60,
					backgroundColor: COLORS.green,
					borderRadius: SIZES.radius / 1.5,
					alignItems: 'center',
					justifyContent: 'center'
				}}
					onPress={() => sendData()}
				>
					<Text style={{ color: COLORS.white, ...FONTS.h3 }}>Continue</Text>
				</TouchableOpacity>
			</View>
		)
	}


	return (
		<KeyboardAvoidingView
			behavior={Platform.OS === "ios" ? "padding" : null}
			style={{ flex: 1 }}
		>
			<LinearGradient
				colors={[COLORS.purple, COLORS.primary]}
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


export default Login;