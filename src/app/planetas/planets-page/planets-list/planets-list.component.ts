import { Component, OnInit } from '@angular/core';

import {Router} from "@angular/router";
import {SwapiService} from "../../../core/swapi.service";

@Component({
  selector: 'app-planets-list',
  templateUrl: 'planets-list.component.html',
  styleUrls: ['planets-list.component.css']
})
export class PlanetsListComponent implements OnInit {

  planets=[];
  currentPange =1;
  totalPages = 1;

  constructor(private  swapiService: SwapiService,
  private router: Router) { }

  ngOnInit() {
    this.swapiService
      .getPlanets()
      .then((data) => {
       this.planets = data.results;
       this.totalPages = data.pages;
       this.currentPange = data.page;
      });
  }

  goToPlanetDetail(planet:any){
    const splittedUrl = planet.url.split('/');
    splittedUrl.pop();
    const id = splittedUrl.pop();
    console.log('He recibido : ',planet);
    const commands = ['planets',id];
    const navitationExtras = {};
    this.router.navigate(commands,navitationExtras);
    console.debug('navigation to',id);
  }

}
