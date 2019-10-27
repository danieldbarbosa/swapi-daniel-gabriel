import { Component, OnInit } from '@angular/core';
import { Starship } from '../starship';
import { SwapiService } from '../swapi.service';

@Component({
  selector: 'app-starshipindex',
  templateUrl: './starshipindex.component.html',
  styleUrls: ['./starshipindex.component.css']
})
export class StarshipindexComponent implements OnInit {

  page:number = 1;
  starships: Starship[]; 
  starshipSelected: Starship;
  constructor(private swapiAPI: SwapiService) { }

  ngOnInit() {
    this.starships = [];
    this.getStarships();
  }

  getStarships(): void {
    this.swapiAPI.getStarships(this.page)
                      .subscribe(dados => {
                          for (let i = 0; i < dados.results.length; i++){
                            let currentStarship = dados.results[i];
                            currentStarship.id = currentStarship.url.split('/')[5];
                            this.starships.push(currentStarship)
                          }
                      });
    this.page++;
  }

}