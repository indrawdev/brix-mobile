import { createStore, combineReducers, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';

import authReducer from '../redux/reducers/auth';

const rootReducer = combineReducers({
	auth: authReducer
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default store;