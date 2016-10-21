import {combineReducers} from 'redux';
import users from './userReducer';
import sessions from './sessionReducer';

const rootReducer = combineReducers({
	users,
	sessions
});

export default rootReducer;