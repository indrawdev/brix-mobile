import * as actionTypes from './types';
import { CONFIG } from '../../constants';

export const pipelinesLoading = () => ({
	type: actionTypes.PIPELINES_LOADING
})

export const pipelinesFailed = (err) => ({
	type: actionTypes.PIPELINES_FAILED,
	payload: err
})

export const getPipelines = () => (dispatch) => {
	// return fetch(CONFIG.BASE_URL + 'v3/pipelines')
	// 	.then(res => { })
	// 	.then(response => response.json()).then(pipelines => )
}