import { SET_PROPOSALS } from '../../constants/types';

const initialState = {
	availableProposals: [],
};

export default (state = initialState, action) => {
	switch (action.type) {
		case SET_PROPOSALS:
			return {
				availableProposals: action.proposals,
			};
		default:
			return state;
	}
}