import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';


import {Landlord} from './landlord';

@Injectable()

export class LandlordService {
  landlords: AngularFireList<any>;

  constructor(private firebase: AngularFireDatabase ) {}

  getLandlords () {
    this.landlords = this.firebase.list('landlords');
    return this.landlords;
  }
  postLandlord (landlord: Landlord) {
    console.log('Firebase' + this.landlords);
    this.landlords.push({
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

