import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Person} from './person';
import {Vehicle} from './vehicle';
import {Planet} from './planet';
import {Specie} from './specie';
import {Starship} from './starship';
import {Film} from './film';

@Injectable()
export class SwapiService{
  private personSelected = new BehaviorSubject(null);
  private vehicleSelected = new BehaviorSubject(null);
  private planetSelected = new BehaviorSubject(null);
  private specieSelected = new BehaviorSubject(null);
  private starshipSelected = new BehaviorSubject(null);
  private filmSelected = new BehaviorSubject(null);
  private apiUrl = 'https://swapi.co/api/';
  private finisher = '?format=json';

  constructor(private http : HttpClient) { 
  }

  //People
  getPeople(page:number): Observable<Person[]> {
    return this.http
           .get<Person[]>(this.apiUrl + 'people/'+this.finisher+'&page='+page);
  }

  getPerson(): Observable<Person> {
    return this.personSelected;
  }

  getPersonById(id:number): Observable<Person> {
    return this.http.get<Person>(this.apiUrl + 'people/' + id+ '/' + this.finisher);
  }

  //Vehicles
  getVehicles(page:number): Observable<Vehicle[]> {
    return this.http
           .get<Vehicle[]>(this.apiUrl + 'vehicles/'+this.finisher+'&page='+page);
  }

  getVehicle(): Observable<Vehicle> {
    return this.vehicleSelected;
  }

  getVehicleById(id:number): Observable<Vehicle> {
    return this.http.get<Vehicle>(this.apiUrl + 'vehicles/' + id+ '/' + this.finisher);
  }

  //Planets
    getPlanets(page:number): Observable<Planet[]> {
    return this.http
           .get<Planet[]>(this.apiUrl + 'planets/'+this.finisher+'&page='+page);
  }

  getPlanet(): Observable<Planet> {
    return this.planetSelected;
  }

  getPlanetById(id:number): Observable<Planet> {
    return this.http.get<Planet>(this.apiUrl + 'planets/' + id+ '/' + this.finisher);
  }

  //Specie
    getSpecies(page:number): Observable<Specie[]> {
    return this.http
           .get<Specie[]>(this.apiUrl + 'species/'+this.finisher+'&page='+page);
  }

  getSpecie(): Observable<Specie> {
    return this.specieSelected;
  }

  getSpecieById(id:number): Observable<Specie> {
    return this.http.get<Specie>(this.apiUrl + 'species/' + id+ '/' + this.finisher);
  }

  //Starship

    getStarships(page:number): Observable<Starship[]> {
    return this.http
           .get<Starship[]>(this.apiUrl + 'starships/'+this.finisher+'&page='+page);
  }

  getStarship(): Observable<Starship> {
    return this.starshipSelected;
  }

  getStarshipById(id:number): Observable<Starship> {
    return this.http.get<Starship>(this.apiUrl + 'starships/' + id+ '/' + this.finisher);
  }
    //Film

    getFilms(page:number): Observable<Film[]> {
    return this.http
           .get<Film[]>(this.apiUrl + 'films/'+this.finisher+'&page='+page);
  }

  getFilm(): Observable<Film> {
    return this.filmSelected;
  }

  getFilmById(id:number): Observable<Film> {
    return this.http.get<Film>(this.apiUrl + 'films/' + id+ '/' + this.finisher);
  }
}