import { SET_EMPLOYEES } from '../../constants/types';

const initialState = {
	availableEmployees: [],
};

export default (state = initialState, action) => {
	switch (action.type) {
		case SET_EMPLOYEES:
			return {
				availableEmployees: action.employees,
			};
		default:
			return state;
	}
}