import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import {Landlord} from '../models';

@Injectable()

export class LandlordFormService {
  landlords: AngularFireList<any>;

  constructor(private firebase: AngularFireDatabase ) {
  }

  postLandlord (landlord: Landlord) {
    this.landlords = this.firebase.list('landlords');
    this.landlords.push({
      name: landlord.name,
      surname: landlord.surname,
      address: landlord.address,
      email: landlord.email,
      postal: landlord.postal,
      properties: landlord.properties,
    });
  }
}

