import { Storage } from '@ionic/storage';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DropLocation } from '../../models/drop_location';
/*
  Generated class for the LocationsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LocationsProvider {

  constructor(private storage: Storage) {
    console.log('Hello LocationsProvider Provider');
    
  }

  private locations: DropLocation[];

  SetLocations(newLocations : DropLocation[]){
    this.locations = newLocations;
    this.storage.set('locations', newLocations);
  }

  GetLocations() : Promise<DropLocation[]> {
    return new Promise((resolve, reject)=> {
      this.storage.get('locations').then((res)=>{
        if (res){
          this.locations = res;
        }
        else{
          this.InitLocations();
        }
        resolve(this.locations);
      });
    });
    
  }

  private InitLocations(){
    this.locations = [
      {
        Name: 'Goblin Gulch',
        Enabled: true
      },
      {
        Name: 'Gun Town',
        Enabled: true
      },
      {
        Name: 'Jade Gardens',
        Enabled: true
      },
      {
        Name: 'Trinity Hills',
        Enabled: true
      },
      {
        Name: 'Sentinel Hold',
        Enabled: true
      },
      {
        Name: 'Forbidden Swamp',
        Enabled: true
      },
      {
        Name: 'Jaguar\'s Claws',
        Enabled: true
      },
      {
        Name: 'Lost Forge',
        Enabled: true
      },
      {
        Name: 'Lumberfall',
        Enabled: true
      },
      {
        Name: 'Fungal Forest',
        Enabled: true
      },
      {
        Name: 'Autumn Fields',
        Enabled: true
      },
      {
        Name: 'Underpass',
        Enabled: true
      },
      {
        Name: 'Northport',
        Enabled: true
      },
      {
        Name: 'Icehaven',
        Enabled: true
      },
      {
        Name: 'Coldmist Village',
        Enabled: true
      },
      {
        Name: 'Outpost',
        Enabled: true
      }
    
    ];
  }


}
