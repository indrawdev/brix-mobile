import { SET_TIMESHEETS } from '../../constants/types';

const initialState = {
	availableTimesheets: [],
};

export default (state = initialState, action) => {
	switch (action.type) {
		case SET_TIMESHEETS:
			return {
				availableTimesheets: action.timesheets,
			};
		default:
			return state;
	}
}