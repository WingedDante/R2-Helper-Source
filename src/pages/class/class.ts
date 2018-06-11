import { ClassesProvider } from './../../providers/classes/classes';
import {Storage} from '@ionic/storage';
import { PlayerClass } from './../../models/player_class';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ClassPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-class',
  templateUrl: 'class.html',
})
export class ClassPage {
  classes: PlayerClass[];
  

  constructor(public navCtrl: NavController, public navParams: NavParams, private classesProvider: ClassesProvider) {
    
  }

  GetSavedStore(){
    this.classesProvider.GetClasses().then((res)=>{
      this.classes = res;
    });
  }

  SaveClasses(){
    this.classesProvider.SetClasses(this.classes);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ClassPage');
    
  }
  ionViewDidEnter(){
    this.GetSavedStore();
  }

}
