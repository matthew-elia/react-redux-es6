import * as types from './actionTypes';
import flightApi from '../api/flightApi';

export function makeFlightsRequest() {
	return function(dispatch) {
		let completeTripId=1;
		return flightApi.getFlights().then(response => {

				let tripOption = response.trips.tripOption;
				console.log(tripOption);
				tripOption.map((obj)=>{
					let outboundTrip = {};
					let returnTrip = {};
					let completeTrip = new Object;

					completeTrip['id'] = completeTripId;
					completeTrip['price'] = obj.saleTotal;
				
					outboundTrip['cabin'] = obj.slice[0].segment[0].cabin;
					outboundTrip['duration'] = obj.slice[0].segment[0].duration;
					outboundTrip['departure_time'] = obj.slice[0].segment[0].leg[0].departureTime;
					outboundTrip['arrival_time'] = obj.slice[0].segment[0].leg[0].arrivalTime;
					completeTrip['outbound'] = outboundTrip;

					returnTrip['cabin'] = obj.slice[1].segment[0].cabin;
					returnTrip['duration'] = obj.slice[1].segment[0].duration;
					returnTrip['departure_time'] = obj.slice[1].segment[0].leg[0].departureTime;
					returnTrip['arrival_time'] = obj.slice[1].segment[0].leg[0].arrivalTime;
					completeTrip['return'] = returnTrip;

					// console.log(completeTrip);
					completeTripId++;
				});
			// dispatch(showFlights(flights));
		}).catch(error => {
			throw(error);
		});
	};
}

export function showFlights(flights) {
	return {type: types.SHOW_FLIGHTS, flights};
}


