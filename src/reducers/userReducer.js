import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function userReducer(state=initialState.users, action){
	switch(action.type) {
		case 'LOAD_USERS_SUCCESS':
			return Object.assign([], action.users);
			
		case 'FIND_OR_CREATE_USER_SUCCESS':
			// browserHistory.push(`/users/${action.user.id}`)
			return Object.assign([], action.user);

		default:
			return state; 
	}
}