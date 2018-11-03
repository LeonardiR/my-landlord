import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HeroComponent} from './components';

@NgModule({
  declarations: [
    HeroComponent,
  ],
  exports: [
    HeroComponent
  ],
  imports: [
    CommonModule,
  ],
  providers: [],
})
export class HeroModule { }
