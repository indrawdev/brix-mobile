import { SET_QUOTATIONS } from '../../constants/types';

const initialState = {
	availableQuotations: [],
};

export default (state = initialState, action) => {
	switch (action.type) {
		case SET_QUOTATIONS:
			return {
				availableQuotations: action.quotations,
			};
		default:
			return state;
	}
}