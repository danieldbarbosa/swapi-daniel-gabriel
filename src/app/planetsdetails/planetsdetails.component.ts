import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Planet } from '../planet';
import { SwapiService } from '../swapi.service';

@Component({
  selector: 'app-planetsdetails',
  templateUrl: './planetsdetails.component.html',
  styleUrls: ['./planetsdetails.component.css']
})
export class PlanetsdetailsComponent implements OnInit {
  idPlanetSelected: number;
  planetSelected: Planet;
  constructor(private route: ActivatedRoute, private swapiAPI:SwapiService) { }

  ngOnInit() {
    this.route.paramMap
              .subscribe(params => 
                    this.idPlanetSelected 
                    = +params.get('planetid'));
    this.swapiAPI.getPlanetById(this.idPlanetSelected)
      .subscribe(
        a=>{
          this.planetSelected = a;
        }
      )
  }

  }