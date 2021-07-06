import { SET_PLACINGS } from '../../constants/types';

const initialState = {
	availablePlacings: [],
};

export default (state = initialState, action) => {
	switch (action.type) {
		case SET_PLACINGS:
			return {
				availablePlacings: action.placings,
			};
		default:
			return state;
	}
}