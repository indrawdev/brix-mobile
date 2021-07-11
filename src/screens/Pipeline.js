import React, { useEffect, useState, useLayoutEffect, useCallback } from 'react';
import { Text, View, ActivityIndicator, FlatList, Button, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { LogoTitle, SearchBar } from '../components';
import * as pipelinesActions from '../redux/actions/pipeline';
import PipelineItem from '../components/user/PipelineItem';
import { COLORS } from '../constants';

const Pipeline = props => {
	const [isLoading, setIsLoading] = useState(false);
	const [isRefreshing, setIsRefreshing] = useState(false);
	const [error, setError] = useState();
	const [search, setSearch] = useState('');

	const pipelines = useSelector(state => state.pipelines.availablePipelines);
	
	const dispatch = useDispatch();
	
	const loadPipelines = useCallback(async () => {
		setError(null);
		setIsRefreshing(true);
		try {
			await dispatch(pipelinesActions.fetchPipelines());
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
		loadPipelines().then(() => {
			setIsLoading(false);
		});
	}, [dispatch, loadPipelines]);

	const selectItemHandler = (id, name) => {
		props.navigation.navigate('PipelineDetail', {
			pipelineId: id,
			pipelineName: name
		})
	}

	if (error) {
		return (
			<View style={styles.centered}>
				<Text>An error occurred!</Text>
				<Button
					title="Try again"
					onPress={loadPipelines}
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

	if (!isLoading && pipelines.length === 0) {
		return (
			<View style={styles.centered}>
				<Text>No pipelines found. Maybe start adding some!</Text>
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
				onRefresh={loadPipelines}
				refreshing={isRefreshing}
				data={pipelines}
				keyExtractor={item => item.pipeline_id}
				renderItem={itemData => (
					<PipelineItem
						name={itemData.item.company_name}
						type={itemData.item.company_type}
						code={itemData.item.pipeline_code}
						onSelect={() => {
							selectItemHandler(itemData.item.pipeline_id, itemData.item.company_name);
						}}
					></PipelineItem>
				)}
			/>
		</View>
	);


};

const styles = StyleSheet.create({
	centered: { flex: 1, justifyContent: 'center', alignItems: 'center' }
});

export default Pipeline;