import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Person } from '../person';
import { SwapiService } from '../swapi.service';

@Component({
  selector: 'app-peopledetails',
  templateUrl: './peopledetails.component.html',
  styleUrls: ['./peopledetails.component.css']
})
export class PeopleDetailsComponent implements OnInit {
  idPersonSelected: number;
  personSelected: Person;
  constructor(private route: ActivatedRoute, private swapiAPI: SwapiService) { }

  ngOnInit() {
    this.route.paramMap
              .subscribe(params => 
                    this.idPersonSelected 
                    = +params.get('personid'));
    this.swapiAPI.getPersonById(this.idPersonSelected)
              .subscribe(
                p =>
                {
                  this.personSelected = p;
                  })
  }

}