import React, { useEffect, useState, useLayoutEffect, useCallback } from 'react';
import { Text, View, ActivityIndicator, FlatList, Button, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { LogoTitle, SearchBar } from '../components';
import * as clientsActions from '../redux/actions/client';
import { ClientItem } from '../components/user';
import { COLORS } from '../constants';
import NavigationDrawer from '../components/NavigationDrawer';

const Client = props => {
	const [isLoading, setIsLoading] = useState(false);
	const [isRefreshing, setIsRefreshing] = useState(false);
	const [error, setError] = useState();
	const [search, setSearch] = useState('');

	const clients = useSelector(state => state.clients.availableClients);
	const dispatch = useDispatch();

	const loadClients = useCallback(async () => {
		setError(null);
		setIsRefreshing(true);
		try {
			await dispatch(clientsActions.fetchClients());
		} catch (err) {
			setError(err.message);
		}
		setIsRefreshing(false);
	}, [dispatch, setIsLoading, setError]);

	useLayoutEffect(() => {
		props.navigation.setOptions({
			headerTitle: props => <LogoTitle {...props} />,
			headerLeft: () => (
				<NavigationDrawer {...props} />
			),
		})
	}, [props.navigation]);

	useEffect(() => {
		setIsLoading(true);
		loadClients().then(() => {
			setIsLoading(false);
		});
	}, [dispatch, loadClients]);


	const selectItemHandler = (id, name) => {
		props.navigation.navigate('ClientDetail', {
			clientId: id,
			clientName: name
		})
	}

	if (error) {
		return (
			<View style={styles.centered}>
				<Text>An error occurred!</Text>
				<Button
					title="Try again"
					onPress={loadClients}
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

  if (!isLoading && clients.length === 0) {
    return (
      <View style={styles.centered}>
        <Text>No clients found. Maybe start adding some!</Text>
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
				onRefresh={loadClients}
				refreshing={isRefreshing}
				data={clients}
				keyExtractor={item => item.client_id}
				renderItem={itemData => (
					<ClientItem
						// image={itemData.item.imageUrl}
						name={itemData.item.client_name}
						type={itemData.item.client_type}
						onSelect={() => {
							selectItemHandler(itemData.item.client_id, itemData.item.client_name);
						}}
					></ClientItem>
				)}
			/>
		</View>

	);
}

const styles = StyleSheet.create({
  centered: { flex: 1, justifyContent: 'center', alignItems: 'center' }
});

export default Client;