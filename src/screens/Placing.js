import React, { useEffect, useState, useLayoutEffect, useCallback } from 'react';
import { Text, View, ActivityIndicator, FlatList, Button, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { LogoTitle, SearchBar } from '../components';
import * as placingsActions from '../redux/actions/placing';
import PlacingItem from '../components/user/PlacingItem';
import { COLORS } from '../constants';

const Placing = props => {
	const [isLoading, setIsLoading] = useState(false);
	const [isRefreshing, setIsRefreshing] = useState(false);
	const [error, setError] = useState();
	const [search, setSearch] = useState('');
	
	const placings = useSelector(state => state.placings.availablePlacings);

	const dispatch = useDispatch();

	const loadPlacings = useCallback(async () => {
		setError(null);
		setIsRefreshing(true);
		try {
			await dispatch(placingsActions.fetchPlacings());
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
		loadPlacings().then(() => {
			setIsLoading(false);
		});
	}, [dispatch, loadPlacings]);

	const selectItemHandler = (id, name) => {
		props.navigation.navigate('PlacingDetail', {
			placingId: id,
			placingName: name
		})
	}

	if (error) {
		return (
			<View style={styles.centered}>
				<Text>An error occurred!</Text>
				<Button
					title="Try again"
					onPress={loadPlacings}
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

	if (!isLoading && placings.length === 0) {
		return (
			<View style={styles.centered}>
				<Text>No placings found. Maybe start adding some!</Text>
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
				onRefresh={loadPlacings}
				refreshing={isRefreshing}
				data={placings}
				keyExtractor={item => item.request_id}
				renderItem={itemData => (
					<PlacingItem
						name={itemData.item.company_name}
						type={itemData.item.company_type}
						code={itemData.item.pipeline_code}
						onSelect={() => {
							selectItemHandler(itemData.item.pipeline_id, itemData.item.company_name);
						}}
					></PlacingItem>
				)}
			/>
		</View>
	)
};

const styles = StyleSheet.create({
	centered: { flex: 1, justifyContent: 'center', alignItems: 'center' }
});

export default Placing;