import Proposal from '../../models/proposal';
import { SET_PROPOSALS } from '../../constants/types';
import api from '../../constants/api';

export const fetchProposals = () => {
	return async (dispatch, getState) => {

		const userId = getState().auth.userId;
		const accessToken = getState().auth.token;

		try {
			const response = await fetch(api.PROPOSALS_URL, {
				method: 'GET',
				headers: {
					'Authorization': 'Bearer ' + accessToken
				}
			});

			if (!response.ok) {
				throw new Error('Something went wrong!');
			}

			const resData = await response.json();
			const loadedProposals = [];

			for (const key in resData.data.rows) {
				loadedProposals.push(
					new Proposal(
						resData.data.rows[key].pipeline_id,
						resData.data.rows[key].request_name
					)
				);
			}

			dispatch({
				type: SET_PROPOSALS,
				proposals: loadedProposals
			});

		} catch (err) {
			throw err;
		}
	}
}
