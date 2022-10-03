import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightDashComponent } from './flight-dash.component';

describe('FlightDashComponent', () => {
  let component: FlightDashComponent;
  let fixture: ComponentFixture<FlightDashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlightDashComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
