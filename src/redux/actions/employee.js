import Employee from '../../models/employee';
import { SET_EMPLOYEES } from '../../constants/types';
import api from '../../constants/api';

export const fetchEmployees = () => {
	return async (dispatch, getState) => {
	
		const userId = getState().auth.userId;
		const accessToken = getState().auth.token;

		try {
			const response = await fetch(api.EMPLOYEES_URL, {
				method: 'GET',
				headers: {
					'Authorization': 'Bearer ' + accessToken
				}
			});

			if (!response.ok) {
				throw new Error('Something went wrong!');
			}

			const resData = await response.json();
			const loadedEmployees = [];

			for (const key in resData.data.rows) {
				loadedEmployees.push(
					new Employee(
						resData.data.rows[key].client_id,
						resData.data.rows[key].client_name,
						resData.data.rows[key].client_type,
						resData.data.rows[key].client_address1,
					)
				);
			}

			dispatch({
				type: SET_EMPLOYEES,
				employees: loadedEmployees
			});

		} catch (err) {
			throw err;
		}
	}
}