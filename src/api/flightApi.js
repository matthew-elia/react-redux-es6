// const nrAddDays = 7;
let thursday = '2016-10-27';
let sunday = '2016-10-30';

// function convertUTCDateToLocalDate(date) {
//     var newDate = new Date(date.getTime()+date.getTimezoneOffset()*60*1000);

//     var offset = date.getTimezoneOffset() / 60;
//     var hours = date.getHours();

//     newDate.setHours(hours - offset);

//     return newDate;   
// }

class FlightApi { 

  static getFlights() {

    // sunday = new Date(parseInt(sunday[0]), parseInt(sunday[1])-1, parseInt(sunday[2]));
    // sunday.setDate(sunday.getDate() + nrAddDays);
    // let x = convertUTCDateToLocalDate(sunday);
    // console.log(x);
    // console.log(x.toLocaleDateString());

    // for (let i = 0; i < 52; i++) {

    //   thursday.toString().split('-');
    //   thursday = new Date(parseInt(thursday[0]), parseInt(thursday[1])-1, parseInt(thursday[2]));
    //   thursday.setDate(thursday.getDate() + nrAddDays);

    //   console.log(thursday+" - "+sunday);

    //   sunday.toString().split('-');
    //   sunday = new Date(parseInt(sunday[0]), parseInt(sunday[1])-1, parseInt(sunday[2]));
    //   sunday.setDate(sunday.getDate() + nrAddDays);

    // }


    let options = {
      "request": {
        "passengers": { "adultCount": 2 },
        "slice": [{
          "origin": "NYC",
          "destination": "MIA",
          "date": thursday,
          "maxStops": 0,
          "preferredCabin": "FIRST"
        },{
          "origin": "MIA",
          "destination": "NYC",
          "date": sunday,
          "maxStops": 0,
          "preferredCabin": "FIRST"
        }]
      }
    };

    const request = new Request('https://www.googleapis.com/qpxExpress/v1/trips/search?key=AIzaSyDxFex8zFAugEZPFzwz3TtrQTmKQu64UrE', {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify(options)
    });

    return fetch(request).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }

}

export default FlightApi;
