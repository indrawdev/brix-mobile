import { createStore, combineReducers, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';

import authReducer from '../redux/reducers/auth';
import clientsReducer from '../redux/reducers/clients';
import pipelinesReducer from '../redux/reducers/pipelines';

const rootReducer = combineReducers({
	auth: authReducer,
	clients: clientsReducer,
	pipelines: pipelinesReducer
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default store;