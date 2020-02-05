import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { LeaseOut } from '../models/lease-out.model'
import { RealEstateTypes } from '../models/real-estate-types.enum';
import { UpdatePeriod } from '../models/update-period.model';
import { CurrencyTypes } from '../models/currency-types.enum';


@Injectable({
  providedIn: 'root'
})

export class PropertyService {
  
  constructor(private httpClient: HttpClient) {
  }

  getPeriodByProperty(): Observable<any> {
    console.log("Request is made by getPeriodByProperty method")

    return this.httpClient.get('https://localhost:44393/realestate/GetPeriodByProperty?startDate=1/1/2020&endDate=1/1/2020&name=Charlie')
  }

  createLeaseOut(leaseOutDTO: LeaseOut) {

    // let headers = new HttpHeaders({
    //   'Content-Type': 'multipart/form-data; boundary=--------------------------466306960686983777333008',
    //   "Access-Control-Allow-Origin": "*",
    //   "Access-Control-Allow-Methods": "OPTIONS, GET, POST",
    //   "Access-Control-Allow-Headers": "Content-Type, Depth, User-Agent, X-File-Size, X-Requested-With, If-Modified-Since, X-File-Name, Cache-Control",
    //   "Access-Control-Allow-Credentials": "true"
    // });
    // let options = { headers: headers };

    console.log("Request is made by createLeaseOut method")

    return this.httpClient.post('https://localhost:44393/realestate/LeaseOut', leaseOutDTO).subscribe(
      res => {
      console.log("Post Request successful value returned in body", res);
      },
      error => {
        console.log("Post Request returned error message", error);
      },
      () => {
        console.log("The Post observable is now completed.");
      }
    );
  }

  updatePeriodByProperty(startDate: Date, endDate: Date, name: string, amount: number, currencyType: string) {
    console.log("Request is made by updatePeriodByProperty method");

    let currency: CurrencyTypes = CurrencyTypes[currencyType];
    let updatePeriodDTO = new UpdatePeriod(name, startDate, endDate, amount, currency);

    return this.httpClient.post('https://localhost:44393/realestate/UpdatePeriodByProperty', updatePeriodDTO).subscribe(
      res => {
        console.log("Put Request successful value returned in body", res);
      },
      error => {
        console.log("Post Request returned error message", error)
      },
      () => {
        console.log("The Put observable is now completed.")
      }
    )
  }
}
