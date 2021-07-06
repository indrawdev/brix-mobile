import { SET_ACCEPTANCES } from '../../constants/types';

const initialState = {
	availableAcceptances: [],
};

export default (state = initialState, action) => {
	switch (action.type) {
		case SET_ACCEPTANCES:
			return {
				availableAcceptances: action.acceptances,
			};
		default:
			return state;
	}
}