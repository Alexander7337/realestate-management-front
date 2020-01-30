import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, Observable } from 'rxjs';

@Injectable()
export class DataService {

  private messageSource = new BehaviorSubject<string>("NOT SELECTED");
  currentMessage = this.messageSource.asObservable();

  constructor() { }

  changeMessage(message: string) {
    this.messageSource.next(message);
  }

  getMessage(): Observable<string> {
    return this.messageSource.asObservable();
  }

  updateMessage(message: string) {
    this.messageSource.next(message);
  }
 
}
