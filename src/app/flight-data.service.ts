import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FlightDataService {

  constructor() { }


  getFlightByAirlines(airline:String){
    return this.getFlightDetails().find(flight=>flight.airline==airline)!;
  }

  getFlightDetails()
  {
    return[
      {
        "airline": "Vistara",
        "departure": "New Delhi, India",
        "shortHandDeparture":"DEL",
        "arrival": "Mumbai, India",
        "shortHandArrival":"BOM",
        "duration":"2h 20m",
        "departureTime":"17:45",
        "arrivalTime":"20:05",
        "Price":"6,253",
        "emi":"2,085"
      },
      {
        "airline": "Spice Jet",
        "departure": "New Delhi, India",
        "shortHandDeparture":"DEL",
        "arrival": "Mumbai, India",
        "shortHandArrival":"BOM",
        "duration":"2h 15m",
        "departureTime":"18:35",
        "arrivalTime":"20:05",
        "Price":"7,776",
        "emi":"2,592"

      },
      {
        "airline": "Vistara",
        "departure": "New Delhi, India",
        "shortHandDeparture":"DEL",
        "arrival": "Mumbai, India",
        "shortHandArrival":"BOM",
        "duration":"2h 20m",
        "departureTime":"19:45",
        "arrivalTime":"22:05",
        "Price":"7,776",
        "emi":"2,592"
      }
    ]
  }
}
