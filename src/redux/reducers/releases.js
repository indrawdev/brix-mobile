import { SET_RELEASES } from '../../constants/types';

const initialState = {
	availableReleases: [],
};

export default (state = initialState, action) => {
	switch (action.type) {
		case SET_RELEASES:
			return {
				availableReleases: action.releases,
			};
		default:
			return state;
	}
}