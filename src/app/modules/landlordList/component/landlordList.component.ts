import { Component } from '@angular/core';


@Component({
  selector: 'app-landlord',
  templateUrl: './landlordList.component.html',
  styleUrls:  ['./landlordList.component.scss']
})

export class LandlordListComponent {
  landlords = [
    {
      name: 'Regulo',
      surname: 'Leonardi',
      email: 'regulo.leonardi@gmail.com',
      address: 'Carrer valencia 605',
      postal: '08026',
      rate: 4
    },
    {
      name: 'Ana',
      surname: 'Pirela',
      email: 'ana@gmail.com',
      address: 'Carrer valencia 605',
      postal: '08026',
      rate: 5
    },
    {
      name: 'Eduardo',
      surname: 'Ferrer',
      email: 'eduardo@gmail.com',
      address: 'En puto Madrid',
      postal: '08026',
      rate: 2
    },
  ];
}
