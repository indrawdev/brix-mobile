import React, { useEffect, useState, useLayoutEffect, useCallback } from 'react';
import { Text, View, ActivityIndicator, FlatList, Button, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { LogoTitle, SearchBar } from '../components';
import * as releasesActions from '../redux/actions/release';
import ReleaseItem from '../components/user/ReleaseItem';
import { COLORS } from '../constants';

const Release = props => {
	const [isLoading, setIsLoading] = useState(false);
	const [isRefreshing, setIsRefreshing] = useState(false);
	const [error, setError] = useState();
	const [search, setSearch] = useState('');

	const releases = useSelector(state => state.releases.availableReleases);

	const dispatch = useDispatch();

	const loadReleases = useCallback(async () => {
		setError(null);
		setIsRefreshing(true);
		try {
			await dispatch(releasesActions.fetchReleases());
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
		loadReleases().then(() => {
			setIsLoading(false);
		});
	}, [dispatch, loadReleases]);

	const selectItemHandler = (id, name) => {
		props.navigation.navigate('ReleaseDetail', {
			releaseId: id,
			releaseName: name
		})
	}

	if (error) {
		return (
			<View style={styles.centered}>
				<Text>An error occurred!</Text>
				<Button
					title="Try again"
					onPress={loadReleases}
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

	if (!isLoading && releases.length === 0) {
		return (
			<View style={styles.centered}>
				<Text>No releases found. Maybe start adding some!</Text>
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
				onRefresh={loadReleases}
				refreshing={isRefreshing}
				data={releases}
				keyExtractor={item => item.request_id}
				renderItem={itemData => (
					<ReleaseItem
						name={itemData.item.company_name}
						type={itemData.item.company_type}
						code={itemData.item.pipeline_code}
						onSelect={() => {
							selectItemHandler(itemData.item.pipeline_id, itemData.item.company_name);
						}}
					></ReleaseItem>
				)}
			/>
		</View>
	)
};

const styles = StyleSheet.create({
	centered: { flex: 1, justifyContent: 'center', alignItems: 'center' }
});

export default Release;