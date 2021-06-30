import Client from '../../models/client';
import { SET_CLIENTS } from '../../constants/types';
import { CLIENTS_URL } from '../../constants/api';

export const fetchClients = () => {
	return async (dispatch, getState) => {

		const userId = getState().auth.userId;
		const accessToken = getState().auth.accessToken;

		try {
			const response = await fetch(CLIENTS_URL, {
				
			});

			if (!response.ok) {
				throw new Error('Something went wrong!');
			}

			const resData = await response.json();
			const loadedClients = [];

			for (const key in resData) {
				loadedClients.push(
					new Client(
						resData[key].client_id,
						resData[key].client_name,
						resData[key].client_type,
						resData[key].client_address,
					)
				);
			}

			dispatch({
				type: SET_CLIENTS,
				clients: loadedClients,
				// userProducts: loadedClients.filter(prod => prod.ownerId === userId)
			});
		} catch (err) {
			// send to custom analytics server
			throw err;
		}
	}
}