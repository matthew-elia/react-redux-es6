import * as types from '../actions/actionTypes';
import initialState from './initialState';
import {browserHistory} from 'react-router';

export default function sessionReducer(state = initialState.sessions, action) {
  switch(action.type) {
    case types.FIND_OR_CREATE_USER_SUCCESS:
      browserHistory.push('/')
      return !!sessionStorage.jwt
    case types.LOG_OUT:
      browserHistory.push('/')
      return !!sessionStorage.jwt
    default: 
      return state;
  }
}