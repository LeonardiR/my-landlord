import { Injectable } from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database';
import { Observable } from 'rxjs-compat/Observable';

@Injectable()

export class LandlordListService {
  landlordsGet: Observable<any>;

  constructor(private firebase: AngularFireDatabase ) {
  }

  getLandlords () {
    this.landlordsGet = this.firebase.list('landlords').valueChanges();
    return this.landlordsGet;
  }
}
