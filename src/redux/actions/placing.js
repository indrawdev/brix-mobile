import Placing from '../../models/placing';
import { SET_PLACINGS } from '../../constants/types';
import api from '../../constants/api';

export const fetchPlacings = () => {
	return async (dispatch, getState) => {
		const accessToken = getState().auth.token;

		try {
			const response = await fetch(api.PLACINGS_URL, {
				method: 'GET',
				headers: {
					'Authorization': 'Bearer ' + accessToken
				}
			});

			if (!response.ok) {
				throw new Error('Something went wrong!');
			}

			const resData = await response.json();
			const loadedPlacings = [];

			for (const key in resData.data.rows) {
				loadedPlacings.push(
					new Placing(
						resData.data.rows[key].pipeline_id,
						resData.data.rows[key].pipeline_code,
						resData.data.rows[key].company_type,
					)
				);
			}

			dispatch({
				type: SET_PLACINGS,
				placings: loadedPlacings
			});

		} catch (err) {
			throw err;
		}
	}
}