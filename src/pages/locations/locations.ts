import { DropLocation } from './../../models/drop_location';
import { LocationsProvider } from './../../providers/locations/locations';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the LocationsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-locations',
  templateUrl: 'locations.html',
})
export class LocationsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private locationsProvider: LocationsProvider) {
  }

  locations: DropLocation[];

  ionViewDidLoad() {
    console.log('ionViewDidLoad LocationsPage');
  }

  GetSavedStore(){
    this.locationsProvider.GetLocations().then((res)=>{
      this.locations = res;
    });
  }

  SaveClasses(){
    this.locationsProvider.SetLocations(this.locations);
  }

  ionViewDidEnter(){
    this.GetSavedStore();
  }

}
