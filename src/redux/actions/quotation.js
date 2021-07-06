import Quotation from '../../models/quotation';
import { SET_QUOTATIONS } from '../../constants/types';
import api from '../../constants/api';

export const fetchQuotations = () => {
	return async (dispatch, getState) => {
		const accessToken = getState().auth.token;

		try {
			const response = await fetch(api.QUOTATIONS_URL, {
				method: 'GET',
				headers: {
					'Authorization': 'Bearer ' + accessToken
				}
			});

			if (!response.ok) {
				throw new Error('Something went wrong!');
			}

			const resData = await response.json();
			const loadedQuotations = [];

			for (const key in resData.data.rows) {
				loadedQuotations.push(
					new Quotation(
						resData.data.rows[key].pipeline_id,
						resData.data.rows[key].pipeline_code,
						resData.data.rows[key].company_type,
					)
				);
			}

			dispatch({
				type: SET_QUOTATIONS,
				quotations: loadedQuotations
			});

		} catch (err) {
			throw err;
		}
	}
}