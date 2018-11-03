import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {AngularFireModule} from '@angular/fire';
import {AngularFireDatabaseModule} from '@angular/fire/database';

import {LandlordFormComponent} from './component';
import {environment} from '../../../environments/environment';
import {LandlordFormService} from './services';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MDBBootstrapModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
  ],
  declarations: [
    LandlordFormComponent
  ],
  exports: [
    LandlordFormComponent
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [LandlordFormService],
})

export class LandlordFormModule {}
