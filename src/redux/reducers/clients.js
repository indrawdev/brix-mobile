import { SET_CLIENTS } from '../../constants/types';

const initialState = {
	availableClients: [],
};

export default (state = initialState, action) => {
	switch (action.type) {
		case SET_CLIENTS:
			return {
				availableClients: action.clients,
			};
		default:
			return state;
	}
}