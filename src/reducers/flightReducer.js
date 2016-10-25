import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function flightReducer(state=initialState.flights, action){
	switch(action.type) {
		case 'SHOW_FLIGHTS':
			console.log(action.flights);
			return Object.assign([], action.flights);

		default:
			return state; 
	}
}