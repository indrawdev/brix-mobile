import React, { useEffect, useState, useLayoutEffect, useCallback } from 'react';
import { Text, View, ActivityIndicator, FlatList, Button, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { LogoTitle, SearchBar } from '../components';
import * as proposalsActions from '../redux/actions/proposal';
import ProposalItem from '../components/user/ProposalItem';
import { COLORS } from '../constants';

const Proposal = props => {
	const [isLoading, setIsLoading] = useState(false);
	const [isRefreshing, setIsRefreshing] = useState(false);
	const [error, setError] = useState();
	const [search, setSearch] = useState('');

	const proposals = useSelector(state => state.proposals.availableProposals);

	const dispatch = useDispatch();

	const loadProposals = useCallback(async () => {
		setError(null);
		setIsRefreshing(true);
		try {
			await dispatch(proposalsActions.fetchProposals());
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
		loadProposals().then(() => {
			setIsLoading(false);
		});
	}, [dispatch, loadProposals]);

	const selectItemHandler = (id, name) => {
		props.navigation.navigate('ProposalDetail', {
			proposalId: id,
			proposalName: name
		})
	}

	if (error) {
		return (
			<View style={styles.centered}>
				<Text>An error occurred!</Text>
				<Button
					title="Try again"
					onPress={loadProposals}
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

	if (!isLoading && proposals.length === 0) {
		return (
			<View style={styles.centered}>
				<Text>No proposals found. Maybe start adding some!</Text>
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
				onRefresh={loadProposals}
				refreshing={isRefreshing}
				data={proposals}
				keyExtractor={item => item.request_id}
				renderItem={itemData => (
					<ProposalItem
						name={itemData.item.company_name}
						type={itemData.item.company_type}
						code={itemData.item.pipeline_code}
						onSelect={() => {
							selectItemHandler(itemData.item.pipeline_id, itemData.item.company_name);
						}}
					></ProposalItem>
				)}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	centered: { flex: 1, justifyContent: 'center', alignItems: 'center' }
});

export default Proposal;