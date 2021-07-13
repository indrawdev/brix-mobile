import Acceptance from '../../models/acceptance';
import { SET_ACCEPTANCES } from '../../constants/types';
import api from '../../constants/api';

export const fetchAcceptances = () => {
	return async (dispatch, getState) => {

		const userId = getState().auth.userId;
		const accessToken = getState().auth.token;

		try {
			const response = await fetch(api.ACCEPTANCES_URL, {
				method: 'GET',
				headers: {
					'Authorization': 'Bearer ' + accessToken
				}
			});

			if (!response.ok) {
				throw new Error('Something went wrong!');
			}

			const resData = await response.json();
			const loadedAcceptances = [];

			for (const key in resData.data.rows) {
				loadedAcceptances.push(
					new Acceptance(
						resData.data.rows[key].client_id,
						resData.data.rows[key].client_name,
						resData.data.rows[key].client_type,
						resData.data.rows[key].client_address1,
					)
				);
			}

			dispatch({
				type: SET_ACCEPTANCES,
				acceptances: loadedAcceptances
			});
		} catch (err) {
			throw err;
		}
	}
}