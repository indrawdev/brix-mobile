import Reimbursement from '../../models/reimbursement';
import { SET_REIMBURSEMENTS } from '../../constants/types';
import api from '../../constants/api';

export const fetchReimbursements = () => {
	return async (dispatch, getState) => {
		const accessToken = getState().auth.token;

		try {
			const response = await fetch(api.REIMBURSEMENTS_URL, {
				method: 'GET',
				headers: {
					'Authorization': 'Bearer ' + accessToken
				}
			});

			if (!response.ok) {
				throw new Error('Something went wrong!');
			}

			const resData = await response.json();
			const loadedReimbursements = [];

			for (const key in resData.data.rows) {
				loadedReimbursements.push(
					new Reimbursement(
						resData.data.rows[key].pipeline_id,
						resData.data.rows[key].pipeline_code,
						resData.data.rows[key].company_type,
					)
				);
			}

			dispatch({
				type: SET_REIMBURSEMENTS,
				reimbursements: loadedReimbursements
			});

		} catch (err) {
			throw err;
		}
	}
}