import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Provider } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeaseOutComponent } from './lease-out/lease-out.component';

import { CommonModule } from '@angular/common';
import { CalendarModule, DateAdapter, CalendarCommonModule, CalendarMonthModule } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { CalendarComponent } from './calendar/calendar.component';
import { FlatpickrModule } from 'angularx-flatpickr';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { DataService } from './services/data.service';

@NgModule({
  declarations: [
    AppComponent,
    LeaseOutComponent,
    CalendarComponent
  ],
  imports: [
    CommonModule,
    NgbModalModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CalendarMonthModule,
    RouterModule.forChild([{ path: '', component: CalendarComponent }]),
    CalendarModule.forRoot({ provide: DateAdapter, useFactory: adapterFactory }),
    FlatpickrModule.forRoot(),
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
