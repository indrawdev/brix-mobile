import React, { useState, useEffect, useReducer, useCallback } from 'react';
import {
	View,
	Text,
	TouchableOpacity,
	Image,
	Alert,
	KeyboardAvoidingView,
	ScrollView,
	Platform,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import images from '../constants/images';
import { COLORS, SIZES, FONTS } from '../constants';

import { useDispatch } from 'react-redux';
import { StatusTopBar } from '../components';
import * as authActions from '../redux/actions';
import { FORM_INPUT_UPDATE } from '../constants/types';
import { Input } from '../components/UI';
import { Loading } from '../components';


const formReducer = (state, action) => {
	if (action.type === FORM_INPUT_UPDATE) {
		const updatedValues = {
			...state.inputValues,
			[action.input]: action.value
		};
		const updatedValidities = {
			...state.inputValidities,
			[action.input]: action.isValid
		};
		let updatedFormIsValid = true;
		for (const key in updatedValidities) {
			updatedFormIsValid = updatedFormIsValid && updatedValidities[key];
		}
		return {
			formIsValid: updatedFormIsValid,
			inputValidities: updatedValidities,
			inputValues: updatedValues
		};
	}
	return state;
};

const Login = props => {
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState();
	
	const dispatch = useDispatch();

	const [formState, dispatchFormState] = useReducer(formReducer, {
    inputValues: {
      email: '',
      password: ''
    },
    inputValidities: {
      email: false,
      password: false
    },
    formIsValid: false
	});
	
	const [showPassword, setShowPassword] = useState(false);

	const loginHandler = async () => {
		let action = authActions.login(
			formState.inputValues.email,
			formState.inputValues.password
		);

		setError(null);
		setIsLoading(true);
		
    try {
      await dispatch(action);
      props.navigation.navigate('Main');
    } catch (err) {
      setError(err.message);
      setIsLoading(false);
    }
	}

	const inputChangeHandler = useCallback(
    (inputIdentifier, inputValue, inputValidity) => {
      dispatchFormState({
        type: FORM_INPUT_UPDATE,
        value: inputValue,
        isValid: inputValidity,
        input: inputIdentifier
      });
    },
    [dispatchFormState]
	);
	
	useEffect(() => {
    if (error) {
      Alert.alert('Error', error, [{ text: 'Okay' }]);
    }
  }, [error]);

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
					{/* <TextInput
						style={{
							marginVertical: SIZES.padding,
							borderBottomColor: COLORS.white,
							borderBottomWidth: 1,
							height: 40,
							color: COLORS.white,
							...FONTS.body3
						}}
						placeholder="Enter Email"
						placeholderTextColor={COLORS.white}
						selectionColor={COLORS.white}
						value={email}
						onChangeText={value => setEmail(value)}
						defaultValue={email}
					/> */}

					<Input
              id="email"
              label="E-Mail"
              keyboardType="email-address"
              required
              email
              autoCapitalize="none"
              errorText="Please enter a valid email address."
              onInputChange={inputChangeHandler}
              initialValue=""
            />
				</View>

				{/* Password */}
				<View style={{ marginTop: SIZES.padding * 2 }}>
					{/* <TextInput
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
						value={password}
						onChangeText={value => setPassword(value)}
						defaultValue={password}
					/> */}

					<Input
              id="password"
              label="Password"
              keyboardType="default"
              secureTextEntry
              required
              minLength={5}
              autoCapitalize="none"
              errorText="Please enter a valid password."
              onInputChange={inputChangeHandler}
              initialValue=""
            />

				</View>
			</View>
		)
	}

	function renderButton() {
		return (
			<View style={{ margin: SIZES.padding * 3 }}>
				{isLoading ? (
					<Loading />
				) : (
					<TouchableOpacity
						style={{
							height: 60,
							backgroundColor: COLORS.secondary,
							borderRadius: SIZES.radius,
							alignItems: 'center',
							justifyContent: 'center'
						}}
						onPress={() => loginHandler()}
					>
						<Text style={{ color: COLORS.white, ...FONTS.h3 }}>Log In</Text>
					</TouchableOpacity>
				)}
			</View>
		)
	}


	return (
			<KeyboardAvoidingView
				behavior={Platform.OS === "ios" ? "padding" : null}
				style={{ flex: 1 }}
			>
				<StatusTopBar
					hidden={false}
				/>
				<LinearGradient
					colors={[COLORS.white, COLORS.white]}
					style={{ flex: 1 }}
				>
					<ScrollView>
						{renderHeader()}
						{renderLogo()}
						{renderForm() }
						{renderButton()}
					</ScrollView>
				</LinearGradient>
			</KeyboardAvoidingView>
	);
};

const mapDispatchToProps = dispatch => ({
  // userLoginFetch: userInfo => dispatch(userLoginFetch(userInfo))
})

export default Login;