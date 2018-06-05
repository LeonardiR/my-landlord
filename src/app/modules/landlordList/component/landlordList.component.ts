import {Component, OnInit} from '@angular/core';
import {Landlord, LandlordService} from '../../../core/landlordService';


@Component({
  selector: 'app-landlord',
  templateUrl: './landlordList.component.html',
  styleUrls:  ['./landlordList.component.scss']
})

export class LandlordListComponent implements OnInit {
  landlords: Landlord[];

  constructor( private landlordService: LandlordService) {}

  ngOnInit() {
    this.getLandlords();
    }

  getLandlords(): void {
     this.landlordService.getLandlords().subscribe(landlords => this.landlords = landlords);
  }
}
