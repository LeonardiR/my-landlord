import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';


import {Landlord} from './landlord';
import {Observable} from 'rxjs-compat/Observable';

@Injectable()

export class LandlordService {
  landlords: AngularFireList<any>;
  landlordsGet: Observable<any>;

  constructor(private firebase: AngularFireDatabase ) {
    }

  getLandlords () {
    this.landlordsGet = this.firebase.list('landlords').valueChanges();
    return this.landlordsGet;
  }
  postLandlord (landlord: Landlord, id: number) {
    this.landlords = this.firebase.list('landlords');
    this.landlords.set(`landlord-${id}`, {
      name: landlord.name,
      surname: landlord.surname,
      address: landlord.address,
      email: landlord.email,
      postal: landlord.postal,
      properties: landlord.properties,
      rate: landlord.rate
    });
  }
}

