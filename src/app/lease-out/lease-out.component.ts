import { Component, OnInit } from '@angular/core';

import { LeaseOut } from './lease-out.model';
import { RealEstateTypes } from './real-estate-types.enum';
import { PropertyService } from '../services/property.service'
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-lease-out',
  templateUrl: './lease-out.component.html',
  styleUrls: ['./lease-out.component.scss']
})

export class LeaseOutComponent implements OnInit {

  public leaseOutModel: LeaseOut;

  message: string;

  constructor(private propertyService: PropertyService, private data: DataService) {
    this.leaseOutModel = new LeaseOut("Default Name Of Property", RealEstateTypes.Apartment);
  }

  ngOnInit() {
    console.log('ngOnInit executed');

    this.data.currentMessage.subscribe(message => this.message = message);
  }

  createLeaseOut() {
    console.log(this.leaseOutModel.name);
    console.log(this.leaseOutModel.type);   

    this.propertyService.createLeaseOut(this.leaseOutModel);

    //Share data between components
    this.data.changeMessage(this.leaseOutModel.name);
  }
}
