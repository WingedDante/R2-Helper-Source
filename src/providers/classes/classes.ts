import { Storage } from '@ionic/storage';
import { PlayerClass } from './../../models/player_class';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
/*
  Generated class for the ClassesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ClassesProvider {

  constructor(private storage: Storage) {
    console.log('Hello ClassesProvider Provider');
    
  }

  private classes: PlayerClass[];

  SetClasses(newClasses : PlayerClass[]){
    this.classes = newClasses;
    this.storage.set('classes', newClasses);
  }

  GetClasses() : Promise<PlayerClass[]> {
    return new Promise((resolve, reject)=> {
      this.storage.get('classes').then((res)=>{
        if (res){
          this.classes = res;
        }
        else{
          this.InitClasses();
        }
        resolve(this.classes);
      });
    });
    
  }

  private InitClasses(){
    this.classes = [
      {
        Name: "Warrior",
        Icon: "fas fa-shield-alt",
        Enabled: true
      },
      {
        Name: "Mage",
        Icon: "fas fa-book",
        Enabled: true
      },
      {
        Name: "Engineer",
        Icon: "fas fa-wrench",
        Enabled: true
      },
      {
        Name: "Hunter",
        Icon: "fas fa-leaf",
        Enabled: true
      },
      {
        Name: "Assasin",
        Icon: "fas fa-eye-slash",
        Enabled: true
      },
    ];
  }

}
