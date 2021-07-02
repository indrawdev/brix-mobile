import React, { useEffect, useState, useLayoutEffect } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

const ClientDetail = props => {
	const clientId = props.route.params.clientId;
  const selectedClient = useSelector(state =>
    state.clients.availableClients.find(client => client.client_id === clientId)
  );
	const dispatch = useDispatch();
	
	const [loading, setLoading] = useState(true);
	const [dataSource, setDataSource] = useState([]);

	useLayoutEffect(() => {
		props.navigation.setOptions({
			headerTitle: props.route.params.clientName,
		})
	}, [props.navigation])
	return (
		<ScrollView>
			<Text>{selectedClient.client_address}</Text>
      <Text>{selectedClient.client_name}</Text>
    </ScrollView>
	);
};


const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 300
  },
  actions: {
    marginVertical: 10,
    alignItems: 'center'
  },
  price: {
    fontSize: 20,
    color: '#888',
    textAlign: 'center',
    marginVertical: 20,
    fontFamily: 'open-sans-bold'
  },
  description: {
    fontFamily: 'open-sans',
    fontSize: 14,
    textAlign: 'center',
    marginHorizontal: 20
  }
});

export default ClientDetail;