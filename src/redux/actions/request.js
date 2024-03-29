import Request from '../../models/request';
import { SET_REQUESTS } from '../../constants/types';
import api from '../../constants/api';

export const fetchRequests = () => {
	return async (dispatch, getState) => {
	
		const userId = getState().auth.userId;
		const accessToken = getState().auth.token;

		try {
			const response = await fetch(api.REQUESTS_URL, {
				method: 'GET',
				headers: {
					'Authorization': 'Bearer ' + accessToken
				}
			});

			if (!response.ok) {
				throw new Error('Something went wrong!');
			}

			const resData = await response.json();
			const loadedRequests = [];

			for (const key in resData.data.rows) {
				loadedRequests.push(
					new Request(
						resData.data.rows[key].request_id,
						resData.data.rows[key].request_name
					)
				);
			}

			dispatch({
				type: SET_REQUESTS,
				requests: loadedRequests
			});

		} catch (err) {
			throw err;
		}
	}
}