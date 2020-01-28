import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { LeaseOut } from '../lease-out/lease-out.model'

@Injectable({
  providedIn: 'root'
})

export class PropertyService {
  
  constructor(
    private httpClient: HttpClient
  ) { }

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
        console.log("Post Request in error", error);
      },
      () => {
        console.log("The Post observable is now completed.");
      }
    );
  }
}
