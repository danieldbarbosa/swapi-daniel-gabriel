import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Film } from '../film';
import { SwapiService } from '../swapi.service';

@Component({
  selector: 'app-filmdetails',
  templateUrl: './filmdetails.component.html',
  styleUrls: ['./filmdetails.component.css']
})
export class FilmdetailsComponent implements OnInit {

  
  idFilmSelected: number;
  filmSelected: Film;
  constructor(private route: ActivatedRoute, private swapiAPI: SwapiService) { }

    ngOnInit() {
    this.route.paramMap
              .subscribe(params => 
                    this.idFilmSelected 
                    = +params.get('filmid'));
    this.swapiAPI.getFilmById(this.idFilmSelected)
              .subscribe(
                a =>
                {
                  this.filmSelected = a;
                })
    }

}