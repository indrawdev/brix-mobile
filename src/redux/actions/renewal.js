import Renewal from '../../models/renewal';
import { SET_RENEWALS } from '../../constants/types';
import api from '../../constants/api';

export const fetchRenewals = () => {
	return async (dispatch, getState) => {

		const userId = getState().auth.userId;
		const accessToken = getState().auth.token;

		try {
			const response = await fetch(api.RENEWALS_URL, {
				method: 'GET',
				headers: {
					'Authorization': 'Bearer ' + accessToken
				}
			});

			if (!response.ok) {
				throw new Error('Something went wrong!');
			}

			const resData = await response.json();
			const loadedRenewals = [];

			for (const key in resData.data.rows) {
				loadedRenewals.push(
					new Renewal(
						resData.data.rows[key].request_id,
						resData.data.rows[key].request_name
					)
				);
			}

			dispatch({
				type: SET_RENEWALS,
				renewals: loadedRenewals
			});

		} catch (err) {
			throw err;
		}
	}
}