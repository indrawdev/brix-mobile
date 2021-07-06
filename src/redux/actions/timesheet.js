import Timesheet from '../../models/timesheet';
import { SET_TIMESHEETS } from '../../constants/types';
import api from '../../constants/api';

export const fetchTimesheets = () => {
	return async (dispatch, getState) => {
		const accessToken = getState().auth.token;

		try {
			const response = await fetch(api.TIMESHEETS_URL, {
				method: 'GET',
				headers: {
					'Authorization': 'Bearer ' + accessToken
				}
			});

			if (!response.ok) {
				throw new Error('Something went wrong!');
			}

			const resData = await response.json();
			const loadedTimesheets = [];

			for (const key in resData.data.rows) {
				loadedTimesheets.push(
					new Timesheet(
						resData.data.rows[key].pipeline_id,
						resData.data.rows[key].pipeline_code,
						resData.data.rows[key].company_type,
					)
				);
			}

			dispatch({
				type: SET_TIMESHEETS,
				timesheets: loadedTimesheets
			});

		} catch (err) {
			throw err;
		}
	}
}