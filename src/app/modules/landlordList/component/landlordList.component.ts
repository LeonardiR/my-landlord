import {Component, OnInit} from '@angular/core';
import {LandlordListService} from '../services';


@Component({
  selector: 'app-landlord',
  templateUrl: './landlordList.component.html',
  styleUrls:  ['./landlordList.component.scss']
})

export class LandlordListComponent implements OnInit {
  landlords = [];

  constructor( private landlordListService: LandlordListService) {}

  ngOnInit() {
    this.getLandlords();
    }

  getLandlords(): void {
     this.landlordListService.getLandlords().subscribe(landlords => this.landlords = landlords);
  }
}
