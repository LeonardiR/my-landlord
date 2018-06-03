import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {LandlordFormComponent} from '../../modules/landlordForm/component';
import {LandlordListComponent} from '../../modules/landlordList/component';


const routes: Routes = [
  { path: 'landlord-register', component: LandlordFormComponent },
  { path: 'landlord-list', component: LandlordListComponent},
  {path: '', redirectTo: '/landlord-register', pathMatch: 'full'},
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule {}
