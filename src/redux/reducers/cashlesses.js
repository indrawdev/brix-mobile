import { SET_CASHLESSES } from '../../constants/types';

const initialState = {
	availableCashlesses: [],
};

export default (state = initialState, action) => {
	switch (action.type) {
		case SET_CASHLESSES:
			return {
				availableCashlesses: action.cashlesses,
			};
		default:
			return state;
	}
}