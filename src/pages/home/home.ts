import { LocationsProvider } from './../../providers/locations/locations';
import { DropLocation } from './../../models/drop_location';
import { PlayerClass } from './../../models/player_class';
import { ClassesProvider } from './../../providers/classes/classes';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private classesProvider: ClassesProvider, private locationsProvider: LocationsProvider) {

  }

  randomizedClass: PlayerClass;
  possibleClasses: PlayerClass[];

  randomizedLocation: DropLocation;
  possibleLocations: DropLocation[];
  
  PickMyClass(){
    this.possibleClasses = [];
    this.classesProvider.GetClasses().then((res)=>{
      res.forEach((playerClass) =>{
        if (playerClass.Enabled){
          this.possibleClasses.push(playerClass);
        }
      });
      let rand = Math.floor(Math.random() * this.possibleClasses.length);
      this.randomizedClass = this.possibleClasses[rand];
    })
  }

  PickMyDrop(){
    this.possibleLocations = [];
    this.locationsProvider.GetLocations().then((res)=>{
      res.forEach((location) =>{
        if (location.Enabled){
          this.possibleLocations.push(location);
        }
      });
      let rand = Math.floor(Math.random() * this.possibleLocations.length);
      this.randomizedLocation = this.possibleLocations[rand];
    })
  }

}
