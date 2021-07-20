import AsyncStorage from "@react-native-async-storage/async-storage";

const HeaderToken = () => {

	const getData = async () => {
		try {
			const jsonValue = await AsyncStorage.getItem('userData')
			return jsonValue != null ? JSON.parse(jsonValue) : null;
			console.log(jsonValue)
		} catch (e) {
			console.log(e)
		}
	}

	return (
		{
			'Content-Type': 'application/json',
			'Authorization': 'Bearer ' + getData.token
		}
	)
}

export default HeaderToken;