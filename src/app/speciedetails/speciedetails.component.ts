import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Specie } from '../specie';
import { SwapiService } from '../swapi.service';

@Component({
  selector: 'app-speciedetails',
  templateUrl: './speciedetails.component.html',
  styleUrls: ['./speciedetails.component.css']
})
export class SpeciedetailsComponent implements OnInit {

  idSpecieSelected: number;
  specieSelected: Specie;
  constructor(private route: ActivatedRoute, private swapiAPI: SwapiService) { }

    ngOnInit() {
    this.route.paramMap
              .subscribe(params => 
                    this.idSpecieSelected 
                    = +params.get('specieid'));
    this.swapiAPI.getSpecieById(this.idSpecieSelected)
              .subscribe(
                a =>
                {
                  this.specieSelected = a;
                })
    }
}