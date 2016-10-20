import * as types from './actionTypes.js';
import userApi from '../api/userApi';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

export function loadUsersSuccess(users) {
	console.log(users);
	return { type: types.LOAD_USERS_SUCCESS, users };
}

export function loadUsers() {
	return function(dispatch) {
		dispatch(beginAjaxCall());
		return userApi.getAllUsers().then(users => {
			dispatch(loadUsersSuccess(users));
		}).catch(error => {
			throw(error);
		});
	};
}