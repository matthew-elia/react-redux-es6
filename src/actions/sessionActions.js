import * as types from './actionTypes';
import sessionApi from '../api/SessionApi';
import auth from '../auth/authentic';

export function findOrCreateUserSuccess(user) {
  window.location.pathname = '/home';
  sessionStorage.setItem('jwt', user.api_key)
  return {type: types.FIND_OR_CREATE_USER_SUCCESS};
}

export function loginUser(credentials) {
  return function(dispatch) {
    return sessionApi.login(credentials).then(user => {
      dispatch(findOrCreateUserSuccess(user));
    }).catch(error => {
      throw(error);
    });
  };
}

export function logOutUser() {
  auth.logOut();
  return {type: types.LOG_OUT}
}