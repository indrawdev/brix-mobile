import React, { useEffect, useState, useLayoutEffect, useCallback } from 'react';
import { Text, View, ActivityIndicator, FlatList, Button, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { LogoTitle, SearchBar } from '../components';
import * as quotationsActions from '../redux/actions/quotation';
import QuotationItem from '../components/user/QuotationItem';
import { COLORS } from '../constants';

const Quotation = props => {
	const [isLoading, setIsLoading] = useState(false);
	const [isRefreshing, setIsRefreshing] = useState(false);
	const [error, setError] = useState();
	const [search, setSearch] = useState('');
	
	const quotations = useSelector(state => state.quotations.availableQuotations);

	const dispatch = useDispatch();

	const loadQuotations = useCallback(async () => {
		setError(null);
		setIsRefreshing(true);
		try {
			await dispatch(quotationsActions.fetchQuotations());
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
		loadQuotations().then(() => {
			setIsLoading(false);
		});
	}, [dispatch, loadQuotations]);

	const selectItemHandler = (id, name) => {
		props.navigation.navigate('QuotationDetail', {
			quotationId: id,
			quotationName: name
		})
	}

	if (error) {
		return (
			<View style={styles.centered}>
				<Text>An error occurred!</Text>
				<Button
					title="Try again"
					onPress={loadQuotations}
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

	if (!isLoading && quotations.length === 0) {
		return (
			<View style={styles.centered}>
				<Text>No quotations found. Maybe start adding some!</Text>
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
				onRefresh={loadQuotations}
				refreshing={isRefreshing}
				data={quotations}
				keyExtractor={item => item.request_id}
				renderItem={itemData => (
					<QuotationItem
						name={itemData.item.company_name}
						type={itemData.item.company_type}
						code={itemData.item.pipeline_code}
						onSelect={() => {
							selectItemHandler(itemData.item.pipeline_id, itemData.item.company_name);
						}}
					></QuotationItem>
				)}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	centered: { flex: 1, justifyContent: 'center', alignItems: 'center' }
});

export default Quotation;