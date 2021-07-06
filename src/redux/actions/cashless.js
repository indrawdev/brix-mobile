import Cashless from '../../models/cashless';
import { SET_CASHLESSES } from '../../constants/types';
import api from '../../constants/api';

export const fetchCashlesses = () => {
	return async (dispatch, getState) => {
		const accessToken = getState().auth.token;

		try {
			const response = await fetch(api.CASHLESSES_URL, {
				method: 'GET',
				headers: {
					'Authorization': 'Bearer ' + accessToken
				}
			});

			if (!response.ok) {
				throw new Error('Something went wrong!');
			}

			const resData = await response.json();
			const loadedCashlesses = [];

			for (const key in resData.data.rows) {
				loadedCashlesses.push(
					new Cashless(
						resData.data.rows[key].pipeline_id,
						resData.data.rows[key].pipeline_code,
						resData.data.rows[key].company_type,
					)
				);
			}

			dispatch({
				type: SET_CASHLESSES,
				cashlesses: loadedCashlesses
			});

		} catch (err) {
			throw err;
		}
	}
}