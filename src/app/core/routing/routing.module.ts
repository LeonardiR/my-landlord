import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MainRoutes } from './constants';

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(MainRoutes) ]
})
export class AppRoutingModule {}
