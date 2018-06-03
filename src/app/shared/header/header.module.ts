import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MDBBootstrapModule} from 'angular-bootstrap-md';

import {HeaderComponent} from './component';
import {AppRoutingModule} from '../../core/routing';


@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot()
  ],
  declarations: [
    HeaderComponent
  ],
  exports: [
    HeaderComponent
  ],
  schemas: [NO_ERRORS_SCHEMA]
})

export class HeaderModule {}
