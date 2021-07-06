import Release from '../../models/release';
import { SET_RELEASES } from '../../constants/types';
import api from '../../constants/api';


export const fetchReleases = () => {
	return async (dispatch, getState) => {
	
		const userId = getState().auth.userId;
		const accessToken = getState().auth.token;

		try {
			const response = await fetch(api.RELEASES_URL, {
				method: 'GET',
				headers: {
					'Authorization': 'Bearer ' + accessToken
				}
			});

			if (!response.ok) {
				throw new Error('Something went wrong!');
			}

			const resData = await response.json();
			const loadedReleases = [];

			for (const key in resData.data.rows) {
				loadedReleases.push(
					new Release(
						resData.data.rows[key].request_id,
						resData.data.rows[key].request_name
					)
				);
			}

			dispatch({
				type: SET_RELEASES,
				releases: loadedReleases
			});

		} catch (err) {
			throw err;
		}
	}
}