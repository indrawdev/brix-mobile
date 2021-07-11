import React, { useEffect, useState, useLayoutEffect, useCallback } from 'react';
import { Text, View, ActivityIndicator, FlatList, Button, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { LogoTitle, SearchBar } from '../components';
import * as renewalsActions from '../redux/actions/renewal';
import RenewalItem from '../components/user/RenewalItem';
import { COLORS } from '../constants';

const Renewal = props => {
	const [isLoading, setIsLoading] = useState(false);
	const [isRefreshing, setIsRefreshing] = useState(false);
	const [error, setError] = useState();
	const [search, setSearch] = useState('');

	const renewals = useSelector(state => state.renewals.availableRenewals);

	const dispatch = useDispatch();

	const loadRenewals = useCallback(async () => {
		setError(null);
		setIsRefreshing(true);
		try {
			await dispatch(renewalsActions.fetchRenewals);
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
		loadRenewals().then(() => {
			setIsLoading(false);
		});
	}, [dispatch, loadRenewals]);

	const selectItemHandler = (id, name) => {
		props.navigation.navigate('RenewalDetail', {
			renewalId: id,
			renewalName: name
		})
	}

	if (error) {
		return (
			<View style={styles.centered}>
				<Text>An error occurred!</Text>
				<Button
					title="Try again"
					onPress={loadRenewals}
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

	if (!isLoading && renewals.length === 0) {
		return (
			<View style={styles.centered}>
				<Text>No renewals found. Maybe start adding some!</Text>
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
				onRefresh={loadRenewals}
				refreshing={isRefreshing}
				data={requests}
				keyExtractor={item => item.request_id}
				renderItem={itemData => (
					<RenewalItem
						name={itemData.item.company_name}
						type={itemData.item.company_type}
						code={itemData.item.pipeline_code}
						onSelect={() => {
							selectItemHandler(itemData.item.pipeline_id, itemData.item.company_name);
						}}
					></RenewalItem>
				)}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	centered: { flex: 1, justifyContent: 'center', alignItems: 'center' }
});

export default Renewal;