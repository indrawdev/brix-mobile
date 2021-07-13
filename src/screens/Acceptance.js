import React, { useEffect, useState, useLayoutEffect, useCallback } from 'react';
import { Text, View, ActivityIndicator, FlatList, Button, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { LogoTitle, SearchBar } from '../components';
import * as acceptancesActions from '../redux/actions/acceptance';
import AcceptanceItem from '../components/user/AcceptanceItem';
import { COLORS } from '../constants';

const Acceptance = props => {
	const [isLoading, setIsLoading] = useState(false);
	const [isRefreshing, setIsRefreshing] = useState(false);
	const [error, setError] = useState();
	const [search, setSearch] = useState('');

	const acceptances = useSelector(state => state.acceptances.availableAcceptances);

	const dispatch = useDispatch();

	const loadAcceptances = useCallback(async () => {
		setError(null);
		setIsRefreshing(true);
		try {
			await dispatch(acceptancesActions.fetchAcceptances());
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
		loadAcceptances().then(() => {
			setIsLoading(false);
		});
	}, [dispatch, loadAcceptances]);

	const selectItemHandler = (id, name) => {
		props.navigation.navigate('AcceptanceDetail', {
			acceptanceId: id,
			acceptanceName: name
		})
	}

	if (error) {
		return (
			<View style={styles.centered}>
				<Text>An error occurred!</Text>
				<Button
					title="Try again"
					onPress={loadAcceptances}
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

	if (!isLoading && acceptances.length === 0) {
		return (
			<View style={styles.centered}>
				<Text>No acceptances found. Maybe start adding some!</Text>
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
				onRefresh={loadAcceptances}
				refreshing={isRefreshing}
				data={acceptances}
				keyExtractor={item => item.pipeline_id}
				renderItem={itemData => (
					<AcceptanceItem
						name={itemData.item.company_name}
						type={itemData.item.company_type}
						code={itemData.item.pipeline_code}
						onSelect={() => {
							selectItemHandler(itemData.item.pipeline_id, itemData.item.company_name);
						}}
					></AcceptanceItem>
				)}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	centered: { flex: 1, justifyContent: 'center', alignItems: 'center' }
});

export default Acceptance;