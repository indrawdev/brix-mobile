import Prospect from '../../models/prospect';
import { SET_PROSPECTS } from '../../constants/types';
import api from '../../constants/api';

export const fetchProspects = () => {
	return async (dispatch, getState) => {

		const userId = getState().auth.userId;
		const accessToken = getState().auth.token;

		try {
			const response = await fetch(api.PROSPECTS_URL, {
				method: 'GET',
				headers: {
					'Authorization': 'Bearer ' + accessToken
				}
			});

			if (!response.ok) {
				throw new Error('Something went wrong!');
			}

			const resData = await response.json();
			const loadedProspects = [];

			for (const key in resData.data.rows) {
				loadedProspects.push(
					new Prospect(
						resData.data.rows[key].pipeline_id,
						resData.data.rows[key].request_name
					)
				);
			}

			dispatch({
				type: SET_PROSPECTS,
				prospects: loadedProspects
			});

		} catch (err) {
			throw err;
		}
	}
}