import * as types from './actionTypes';
import userApi from '../api/userApi';
import auth from '../auth/authentic';


export function loadUsersSuccess() {
	return {type: types.LOAD_USERS_SUCCESS };
}


export function loadUsers() {
	return function(dispatch) {
		return userApi.getAllUsers().then(users => {
			dispatch(loadUsersSuccess(users));
		}).catch(error => {
			throw(error);
		});
	};
}


