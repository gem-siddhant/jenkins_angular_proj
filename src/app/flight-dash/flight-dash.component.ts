import { Component, OnInit,Input } from '@angular/core';
import { FlightDataService } from '../flight-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-flight-dash',
  templateUrl: './flight-dash.component.html',
  styleUrls: ['./flight-dash.component.css']
})
export class FlightDashComponent implements OnInit {


  data:any[]=[];
  constructor(private flightData:FlightDataService, private router:Router) 
  {
    this.data=this.flightData.getFlightDetails();
  }

  ngOnInit(): void {
  }


}
