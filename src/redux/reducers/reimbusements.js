import { SET_REIMBURSEMENTS } from '../../constants/types';

const initialState = {
	availableReimbursements: [],
};

export default (state = initialState, action) => {
	switch (action.type) {
		case SET_REIMBURSEMENTS:
			return {
				availableReimbursements: action.reimbursements,
			};
		default:
			return state;
	}
}