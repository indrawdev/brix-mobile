import { SET_PROSPECTS } from '../../constants/types';

const initialState = {
	availableProspects: [],
};

export default (state = initialState, action) => {
	switch (action.type) {
		case SET_PROSPECTS:
			return {
				availableProspects: action.prospects,
			};
		default:
			return state;
	}
}