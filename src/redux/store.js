import { createStore, combineReducers, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';

import authReducer from './reducers/auth';
import clientsReducer from './reducers/clients';
import employeesReducer from './reducers/employees';
import pipelinesReducer from './reducers/pipelines';
import requestsReducer from './reducers/requests';
import prospectsReducer from './reducers/prospects';
import renewalsReducer from './reducers/renewals';
import proposalsReducer from './reducers/proposals';
import acceptancesReducer from './reducers/acceptances';
import releasesReducer from './reducers/releases';
import placingsReducer from './reducers/placings';
import quotationsReducer from './reducers/quotations';
import reimbursementsReducer from './reducers/reimbusements';
import cashlessesReducer from './reducers/cashlesses';
import timesheetsReducer from './reducers/timesheets';

const rootReducer = combineReducers({
	auth: authReducer,
	clients: clientsReducer,
	employees: employeesReducer,
	pipelines: pipelinesReducer,
	requests: requestsReducer,
	propspects: prospectsReducer,
	renewals: renewalsReducer,
	proposals: proposalsReducer,
	acceptances: acceptancesReducer,
	releases: releasesReducer,
	placings: placingsReducer,
	quotations: quotationsReducer,
	reimbusements: reimbursementsReducer,
	cashlesses: cashlessesReducer,
	timesheets: timesheetsReducer 
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default store;