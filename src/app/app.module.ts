import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderModule } from './shared/header';
import { LandlordFormModule } from './modules/landlordForm';
import { LandlordListModule } from './modules/landlordList';
import { AppRoutingModule } from './core/routing';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HeaderModule,
    LandlordFormModule,
    LandlordListModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
