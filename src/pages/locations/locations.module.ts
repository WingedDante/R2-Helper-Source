import { LocationsProvider } from './../../providers/locations/locations';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LocationsPage } from './locations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatListModule, MatChipsModule } from '@angular/material';
import { IonicStorageModule } from '@ionic/storage';

@NgModule({
  declarations: [
    LocationsPage,
  ],
  imports: [
    IonicPageModule.forChild(LocationsPage),
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatListModule,
    IonicStorageModule.forRoot(),
    MatChipsModule
  ],
  providers: [
    LocationsProvider
  ]
})
export class LocationsPageModule {}
