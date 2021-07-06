import AsyncStorage from "@react-native-async-storage/async-storage";

const HeaderToken = () => {
	return (
		{
			'Content-Type': 'application/json',
			'Authorization': 'Bearer ' + ''
		}
	)
}

export default HeaderToken;