import React, { useEffect, useState, useLayoutEffect, useCallback } from 'react';
import { Text, View, ActivityIndicator, FlatList, Button, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { LogoTitle, SearchBar } from '../components';
import * as employeesActions from '../redux/actions/employee';
import EmployeeItem from '../components/user/EmployeeItem';
import { COLORS } from '../constants';

const Employee = props => {
	const [isLoading, setIsLoading] = useState(false);
	const [isRefreshing, setIsRefreshing] = useState(false);
	const [error, setError] = useState();
	const [search, setSearch] = useState('');

	const employees = useSelector(state => state.employees.availableEmployees);
	const dispatch = useDispatch();

	const loadEmployees = useCallback(async () => {
		setError(null);
		setIsRefreshing(true);
		try {
			await dispatch(employeesActions.fetchEmployees());
		} catch (err) {
			setError(err.message);
		}
		setIsRefreshing(false);
	}, [dispatch, setIsLoading, setError]);

	return (
		<TouchableOpacity>
			<View>
				<Text>Employee</Text>
			</View>
		</TouchableOpacity>
	);
};

export default Employee;