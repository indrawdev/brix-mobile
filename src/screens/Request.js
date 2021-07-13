import React, { useEffect, useState, useLayoutEffect, useCallback } from 'react';
import { Text, View, ActivityIndicator, FlatList, Button, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { LogoTitle, SearchBar } from '../components';
import * as requestsActions from '../redux/actions/request';
import RequestItem from '../components/user/RequestItem';
import { COLORS } from '../constants';

const Request = props => {
	const [isLoading, setIsLoading] = useState(false);
	const [isRefreshing, setIsRefreshing] = useState(false);
	const [error, setError] = useState();
	const [search, setSearch] = useState(''); 

	const requests = useSelector(state => state.requests.availableRequests);

	const dispatch = useDispatch();

	const loadRequests = useCallback(async () => {
		setError(null);
		setIsRefreshing(true);
		try {
			await dispatch(requestsActions.fetchRequests());
		} catch (err) {
			setError(err.message);
		}
		setIsRefreshing(false);
	}, [dispatch, setIsLoading, setError]);

	useLayoutEffect(() => {
		props.navigation.setOptions({
			headerTitle: props => <LogoTitle {...props} />,
		})
	}, [props.navigation]);

	useEffect(() => {
		setIsLoading(true);
		loadRequests().then(() => {
			setIsLoading(false);
		});
	}, [dispatch, loadRequests]);

	const selectItemHandler = (id, name) => {
		props.navigation.navigate('RequestDetail', {
			requestId: id,
			requestName: name
		})
	}

	if (error) {
		return (
			<View style={styles.centered}>
				<Text>An error occurred!</Text>
				<Button
					title="Try again"
					onPress={loadRequests}
					color={COLORS.primary}
				/>
			</View>
		);
	}

	if (isLoading) {
		return (
			<View style={styles.centered}>
				<ActivityIndicator size="large" color={COLORS.primary} />
			</View>
		);
	}

	if (!isLoading && requests.length === 0) {
		return (
			<View style={styles.centered}>
				<Text>No requests found. Maybe start adding some!</Text>
			</View>
		);
	}

	return (
		<View>
			<SearchBar
				label="Search"
				value={search}
				onChangeText={setSearch}
			/>
			<FlatList
				onRefresh={loadRequests}
				refreshing={isRefreshing}
				data={requests}
				keyExtractor={item => item.request_id}
				renderItem={itemData => (
					<RequestItem
						name={itemData.item.company_name}
						type={itemData.item.company_type}
						code={itemData.item.pipeline_code}
						onSelect={() => {
							selectItemHandler(itemData.item.pipeline_id, itemData.item.company_name);
						}}
					></RequestItem>
				)}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	centered: { flex: 1, justifyContent: 'center', alignItems: 'center' }
});

export default Request;