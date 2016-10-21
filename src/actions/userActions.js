import * as types from './actionTypes';
import userApi from '../api/userApi';

export function getKeySuccess(key) {
	return {type: types.GET_KEY_SUCCESS };
}

export function loadUsersSuccess() {
	return {type: types.LOAD_USERS_SUCCESS };
}

export function findOrCreateUserSuccess(user) {
	sessionStorage.setItem('jwt', user.api_key)
	return {type: types.FIND_OR_CREATE_USER_SUCCESS};
}

export function logoutUser() {  
  sessionStorage.removeItem('jwt');
  return {type: types.LOG_OUT}
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

export function loginUser(credentials) {
  return function(dispatch) {
    return userApi.login(credentials).then(user => {
      dispatch(findOrCreateUserSuccess(user));
      // return user;
    }).catch(error => {
      throw(error);
    });
  };
}

export function get_api_key(){
	return function(dispatch) {
		return userApi.getApiKey().then(key => {
			dispatch(getKeySuccess(key));
			return key;
		}).catch(error => {
			throw(error);
		});
	};
}