import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

import { SwapiService} from './swapi.service';
import { Angular2SwapiModule } from 'angular2-swapi';
import { HomeComponent } from './home/home.component';
import { PeopleDetailsComponent } from './peopledetails/peopledetails.component';
import { PeopleIndexComponent } from './peopleindex/peopleindex.component';
import { VehicleindexComponent } from './vehicleindex/vehicleindex.component';
import { VehicledetailsComponent } from './vehicledetails/vehicledetails.component';
import { PlanetsindexComponent } from './planetsindex/planetsindex.component';
import { PlanetsdetailsComponent } from './planetsdetails/planetsdetails.component';
import { SpecieindexComponent } from './specieindex/specieindex.component';
import { SpeciedetailsComponent } from './speciedetails/speciedetails.component';
import { StarshipindexComponent } from './starshipindex/starshipindex.component';
import { StarshipdetailsComponent } from './starshipdetails/starshipdetails.component';
import { FilmindexComponent } from './filmindex/filmindex.component';
import { FilmdetailsComponent } from './filmdetails/filmdetails.component';


const routes: Routes = [
        { path: '', component: HomeComponent },
        { path: 'people/:personid', component: PeopleDetailsComponent },
        { path: 'people', component: PeopleIndexComponent},
        { path: 'vehicles/:vehicleid', component: VehicledetailsComponent },
        { path: 'vehicles', component: VehicleindexComponent },
        { path: 'planets/:planetid', component: PlanetsdetailsComponent },
        { path: 'planets', component:PlanetsindexComponent},
        { path: 'species/:specieid', component: SpeciedetailsComponent },
        { path: 'species', component:SpecieindexComponent},
        { path: 'starships', component:StarshipindexComponent},
        { path: 'starships/:starshipid', component: StarshipdetailsComponent },
        { path: 'films', component:FilmindexComponent},
        { path: 'films/:filmid', component: FilmdetailsComponent },
      ];

@NgModule({
  imports:      [ BrowserModule, FormsModule,Angular2SwapiModule, RouterModule.forRoot(routes)],
  declarations: [ AppComponent, HomeComponent, PeopleDetailsComponent, PeopleIndexComponent, VehicleindexComponent, VehicledetailsComponent, PlanetsindexComponent, PlanetsdetailsComponent, SpecieindexComponent, SpeciedetailsComponent, StarshipindexComponent, StarshipdetailsComponent, FilmindexComponent, FilmdetailsComponent ],
  bootstrap:    [ AppComponent ],
  providers: [SwapiService]
})
export class AppModule { }
