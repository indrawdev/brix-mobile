import Client from '../../models/client';
import { SET_CLIENTS } from '../../constants/types';
import api from '../../constants/api';

export const fetchClients = () => {
	return async (dispatch, getState) => {

		// const userId = getState().auth.userId;
		const accessToken = getState().auth.token;

		try {
			const response = await fetch(api.CLIENTS_URL, {
				method: 'GET',
				headers: {
					'Authorization': 'Bearer ' + accessToken
				}
			});

			if (!response.ok) {
				throw new Error('Something went wrong!');
			}

			const resData = await response.json();
			const loadedClients = [];

			for (const key in resData.data.rows) {
				loadedClients.push(
					new Client(
						resData.data.rows[key].client_id,
						resData.data.rows[key].client_name,
						resData.data.rows[key].client_type,
						resData.data.rows[key].client_address1,
					)
				);
			}

			dispatch({
				type: SET_CLIENTS,
				clients: loadedClients
			});
		} catch (err) {
			throw err;
		}
	}
}