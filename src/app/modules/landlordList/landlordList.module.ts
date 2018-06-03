import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MDBBootstrapModule } from 'angular-bootstrap-md';


import { LandlordListComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    MDBBootstrapModule.forRoot()
  ],
  declarations: [
    LandlordListComponent
  ],
  exports: [
    LandlordListComponent
  ],
  schemas: [NO_ERRORS_SCHEMA]
})

export class LandlordListModule {}
