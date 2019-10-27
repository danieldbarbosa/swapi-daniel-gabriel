import { Component, OnInit } from '@angular/core';
import { Specie } from '../specie';
import { SwapiService } from '../swapi.service';

@Component({
  selector: 'app-specieindex',
  templateUrl: './specieindex.component.html',
  styleUrls: ['./specieindex.component.css']
})
export class SpecieindexComponent implements OnInit {

  page:number = 1;
  species: Specie[]; 
  specieSelected: Specie;
  constructor(private swapiAPI: SwapiService) { }

  ngOnInit() {
    this.species=[];
    this.getSpecies();
  }

  getSpecies():void{
       this.swapiAPI.getSpecies(this.page)
                      .subscribe(dados => {
                          for (let i = 0; i < dados.results.length; i++){
                            let currentSpecie = dados.results[i];
                            currentSpecie.id = currentSpecie.url.split('/')[5];
                            this.species.push(currentSpecie)
                          }
                      });
    this.page++;
  }

}