import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { LeaseOut } from './lease-out.model';
import { RealEstateTypes } from './real-estate-types.enum';
import { PropertyService } from '../services/property.service'

@Component({
  selector: 'app-lease-out',
  templateUrl: './lease-out.component.html',
  styleUrls: ['./lease-out.component.scss']
})
export class LeaseOutComponent implements OnInit {

  public leaseOutModel: LeaseOut;


  constructor(
    private propertyService: PropertyService,
    private http: HttpClient
  ) {
    this.leaseOutModel = new LeaseOut("Default Name Of Property", RealEstateTypes.Apartment);
    
  }

  ngOnInit() {
    console.log('ngOnInit executed')
  }

  createLeaseOut() {
    console.log(this.leaseOutModel.name)
    console.log(this.leaseOutModel.type)
    this.propertyService.createLeaseOut(this.leaseOutModel);
  }
}
