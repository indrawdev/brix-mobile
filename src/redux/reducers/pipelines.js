import { SET_PIPELINES } from '../../constants/types';

const initialState = {
	availablePipelines: [],
};

export default (state = initialState, action) => {
	switch (action.type) {
		case SET_PIPELINES:
			return {
				availablePipelines: action.pipelines,
			};
		default:
			return state;
	}
}