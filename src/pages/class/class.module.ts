import { ClassesProvider } from './../../providers/classes/classes';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ClassPage } from './class';

import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatListModule} from '@angular/material/list';
import {IonicStorageModule} from '@ionic/storage';

@NgModule({
  declarations: [
    ClassPage,
  ],
  imports: [
    IonicPageModule.forChild(ClassPage),
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatListModule,
    IonicStorageModule.forRoot()
  ],
  providers: [
    ClassesProvider
  ]
})
export class ClassPageModule {}
