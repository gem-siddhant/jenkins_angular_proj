import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FlightDataService } from '../flight-data.service';

@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.css']
})
export class PayComponent implements OnInit {

  flight:any
  constructor(private activatedRoute:ActivatedRoute, private flightData:FlightDataService, private router:Router) {
    activatedRoute.params.subscribe((params)=>{
      if(params['airline'])
      {
        this.flight=flightData.getFlightByAirlines(params['airline'])
      }
    })
   }

  ngOnInit(): void {
  }

  pay()
  {
    alert("Thank you! Payment is successful")
    this.router.navigate(['flight'])
  }

}
