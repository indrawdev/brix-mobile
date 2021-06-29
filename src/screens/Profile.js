import React, { useEffect, useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

const Profile = () => {
	const [loading, setLoading] = useState(true);
	const [dataSource, setDataSource] = useState([]);

	return (
		<TouchableOpacity>
			<View>
				<Text>Profile</Text>
				{/* <Text>acessToken : { currentUser.accessToken}</Text> */}
			</View>
		</TouchableOpacity>
	);
};

// const mapStateToProps = state => {
// 	currentUser: state.reducer.currentUser
// }

// const mapDispatchToProps = dispatch => ({

// })

export default Profile;