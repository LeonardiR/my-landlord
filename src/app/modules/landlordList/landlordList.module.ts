import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import {AppRoutingModule} from '../../core/routing';
import { LandlordListComponent } from './component';
import {LandlordListService} from './services';


@NgModule({
  imports: [
    CommonModule,
    MDBBootstrapModule.forRoot(),
    AppRoutingModule,
  ],
  declarations: [
    LandlordListComponent
  ],
  exports: [
    LandlordListComponent
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [LandlordListService],
})

export class LandlordListModule {}
