import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Starship } from '../starship';
import { SwapiService } from '../swapi.service';

@Component({
  selector: 'app-starshipdetails',
  templateUrl: './starshipdetails.component.html',
  styleUrls: ['./starshipdetails.component.css']
})
export class StarshipdetailsComponent implements OnInit {

  idStarshipSelected: number;
  starshipSelected: Starship;
  constructor(private route: ActivatedRoute, private swapiAPI: SwapiService) { }

  ngOnInit() {
    this.route.paramMap
              .subscribe(params => 
                    this.idStarshipSelected 
                    = +params.get('starshipid'));
    this.swapiAPI.getStarshipById(this.idStarshipSelected)
              .subscribe(
                p =>
                {
                  this.starshipSelected = p;
                });
  }

}