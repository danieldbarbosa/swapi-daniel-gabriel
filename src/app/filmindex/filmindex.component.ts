import { Component, OnInit } from '@angular/core';
import { Film } from '../film';
import { SwapiService } from '../swapi.service';

@Component({
  selector: 'app-filmindex',
  templateUrl: './filmindex.component.html',
  styleUrls: ['./filmindex.component.css']
})
export class FilmindexComponent implements OnInit {

  page:number = 1;
  films: Film[]; 
  filmSelected: Film;
  constructor(private swapiAPI: SwapiService) { }

  ngOnInit() {
    this.films=[];
    this.getFilms();
  }

  getFilms():void{
       this.swapiAPI.getFilms(this.page)
                      .subscribe(dados => {
                          for (let i = 0; i < dados.results.length; i++){
                            let currentFilm = dados.results[i];
                            currentFilm.id = currentFilm.url.split('/')[5];
                            this.films.push(currentFilm)
                          }
                      });
    this.page++;
  }
}