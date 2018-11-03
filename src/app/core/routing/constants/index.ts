import {Routes} from '@angular/router';
import {LandlordFormComponent} from '../../../modules/landlordForm/component';
import {LandlordListComponent} from '../../../modules/landlordList/component';

export const MainRoutes: Routes = [
  { path: 'landlord-register', component: LandlordFormComponent },
  { path: 'landlord-list', component: LandlordListComponent},
  {path: '', redirectTo: '/landlord-register', pathMatch: 'full'},
];
