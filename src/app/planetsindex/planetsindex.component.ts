import { Component, OnInit } from '@angular/core';
import { Planet } from '../planet';
import { SwapiService } from '../swapi.service';

@Component({
  selector: 'app-planetsindex',
  templateUrl: './planetsindex.component.html',
  styleUrls: ['./planetsindex.component.css']
})
export class PlanetsindexComponent implements OnInit {

  page:number=1;
  planets: Planet[];
  planetSelected: Planet;
  constructor(private swapiAPI:SwapiService) { }

  ngOnInit() {
    this.planets = [];
    this.getPlanets();

  }

    getPlanets(): void {
    this.swapiAPI.getPlanets(this.page)
                      .subscribe(dados => {
                          for (let i = 0; i < dados.results.length; i++){
                            let currentPlanet = dados.results[i];
                            currentPlanet.id = currentPlanet.url.split('/')[5];
                            this.planets.push(currentPlanet)
                          }
                      });
    this.page++;
  }

}