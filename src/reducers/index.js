import {combineReducers} from 'redux';
import user from './userReducer';
import session from './sessionReducer';
import flight from './flightReducer';

const rootReducer = combineReducers({
	user,
	session,
	flight
});

export default rootReducer;