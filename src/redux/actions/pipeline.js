import Pipeline from '../../models/pipeline';
import { SET_PIPELINES } from '../../constants/types';
import api from '../../constants/api';
import HeaderToken from '../../helpers/HeaderToken';

export const fetchPipelines = () => {
	return async (dispatch, getState) => {

		const accessToken = getState().auth.token;

		try {
			const response = await fetch(api.PIPELINES_URL, {
				method: 'GET',
				headers: <HeaderToken />
			});

			if (!response.ok) {
				throw new Error('Something went wrong!');
			}

			const resData = await response.json();
			const loadedPipelines = [];

			for (const key in resData.data.rows) {
				loadedPipelines.push(
					new Pipeline(
						resData.data.rows[key].pipeline_id,
						resData.data.rows[key].pipeline_code,
						resData.data.rows[key].company_type,
						resData.data.rows[key].company_name,
						resData.data.rows[key].head_office_address,
					)
				);
			}

			dispatch({
				type: SET_PIPELINES,
				pipelines: loadedPipelines
			});
		} catch (err) {
			throw err;
		}
	}
}