import {combineReducers} from 'redux';
import courses from './courseReducer';
import users from './userReducer';
import ajaxStatus from './ajaxStatusReducer';

const rootReducer = combineReducers({
	courses,
	users,
	ajaxStatus
});

export default rootReducer;