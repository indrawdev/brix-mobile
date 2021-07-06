import { SET_REQUESTS } from '../../constants/types';

const initialState = {
	availableRequests: [],
};

export default (state = initialState, action) => {
	switch (action.type) {
		case SET_REQUESTS:
			return {
				availableRequests: action.requests,
			};
		default:
			return state;
	}
}