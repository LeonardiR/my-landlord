import { Injectable } from '@angular/core';
import {Landlord} from '../models';
import {AngularFireList, AngularFireDatabase} from '@angular/fire/database';


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

