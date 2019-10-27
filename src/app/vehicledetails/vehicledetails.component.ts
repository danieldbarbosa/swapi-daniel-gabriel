import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Vehicle } from '../vehicle';
import { SwapiService } from '../swapi.service';

@Component({
  selector: 'app-vehicledetails',
  templateUrl: './vehicledetails.component.html',
  styleUrls: ['./vehicledetails.component.css']
})
export class VehicledetailsComponent implements OnInit {

  idVehicleSelected: number;
  vehicleSelected: Vehicle;
  constructor(private route: ActivatedRoute, private swapiAPI: SwapiService) { }

  ngOnInit() {
    this.route.paramMap
              .subscribe(params => 
                    this.idVehicleSelected 
                    = +params.get('vehicleid'));
    this.swapiAPI.getVehicleById(this.idVehicleSelected)
              .subscribe(
                p =>
                {
                  this.vehicleSelected = p;
                });
  }

}