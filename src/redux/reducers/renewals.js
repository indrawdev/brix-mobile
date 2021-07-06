import { SET_RENEWALS } from '../../constants/types';

const initialState = {
	availableRenewals: [],
};

export default (state = initialState, action) => {
	switch (action.type) {
		case SET_RENEWALS:
			return {
				availableRenewals: action.renewals,
			};
		default:
			return state;
	}
}