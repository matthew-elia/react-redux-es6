import * as types from './actionTypes';
import userApi from '../api/userApi';
import auth from '../auth/authentic';


export function loadUsers() {
	return function(dispatch) {
		return userApi.getAllUsers().then(users => {
			dispatch(loadUsersSuccess(users));
		}).catch(error => {
			throw(error);
		});
	};
}

export function deleteUser(user_id) {
	return function(dispatch) {
		return userApi.destroyUser(user_id).then(deleted_user => {
			dispatch(deleteUserSuccess(deleted_user));
		}).catch(error => {
			throw(error);
		});
	}
}

export function loadUsersSuccess(users) {
	return {type: types.LOAD_USERS_SUCCESS, users};
}

export function deleteUserSuccess(deleted_user) {
	alert(deleted_user.id);
	return {type: types.DELETE_USER_SUCCESS};
}


