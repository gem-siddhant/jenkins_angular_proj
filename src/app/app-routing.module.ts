import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlightDashComponent } from './flight-dash/flight-dash.component';
import { LoginComponent } from './login/login.component';
import { PayComponent } from './pay/pay.component';

const routes: Routes = [
  {
    path:'', redirectTo:'login', pathMatch:'full'
  },
  {
    path:'login', component:LoginComponent
  },
  {
    path:'flight', component:FlightDashComponent
  },
  {
    path:'pay/:airline', component:PayComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
