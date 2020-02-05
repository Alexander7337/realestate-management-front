import {
  Component,
  ChangeDetectionStrategy,
  ViewEncapsulation,
  OnInit
} from '@angular/core';
import {
  CalendarEvent,
  CalendarMonthViewDay,
  CalendarView
} from 'angular-calendar';
import { WeekViewHour } from 'calendar-utils';

import { DataService } from '../services/data.service';
import { PropertyService } from '../services/property.service';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'mwl-demo-component',
  // changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: 'calendar.component.html',
  styles: [
    `
      .cal-day-selected,
      .cal-day-selected:hover {
        background-color: deeppink !important;
      }
    `
  ],
  encapsulation: ViewEncapsulation.None
})
export class CalendarComponent implements OnInit { 

  view: CalendarView = CalendarView.Month;

  viewDate: Date = new Date();

  selectedMonthViewDay: CalendarMonthViewDay;

  selectedDayViewDate: Date;

  dayView: WeekViewHour[];

  events: CalendarEvent[] = [];

  selectedDays: any = [];

  message: string;

  constructor(private data: DataService, private propertyService: PropertyService) { 
  }

  ngOnInit() {
    this.data.currentMessage.subscribe(message => this.message = message);
  }

  updatePeriod() {
    this.propertyService.updatePeriodByProperty(new Date(), new Date(), "TEST", 85, "BGN")
  }

  dayClicked(day: CalendarMonthViewDay): void {
    this.selectedMonthViewDay = day;
    const selectedDateTime = this.selectedMonthViewDay.date.getTime();
    const dateIndex = this.selectedDays.findIndex(
      selectedDay => selectedDay.date.getTime() === selectedDateTime
    );
    if (dateIndex > -1) {
      delete this.selectedMonthViewDay.cssClass;
      this.selectedDays.splice(dateIndex, 1);
    } else {
      this.selectedDays.push(this.selectedMonthViewDay);
      day.cssClass = 'cal-day-selected';
      this.selectedMonthViewDay = day;
    }
  }

  beforeMonthViewRender({ body }: { body: CalendarMonthViewDay[] }): void {
    body.forEach(day => {
      if (
        this.selectedDays.some(
          selectedDay => selectedDay.date.getTime() === day.date.getTime()
        )
      ) {
        day.cssClass = 'cal-day-selected';
      }
    });
  }

  hourSegmentClicked(date: Date) {
    this.selectedDayViewDate = date;
    this.addSelectedDayViewClass();
  }

  beforeDayViewRender(dayView: WeekViewHour[]) {
    this.dayView = dayView;
    this.addSelectedDayViewClass();
  }

  private addSelectedDayViewClass() {
    this.dayView.forEach(hourSegment => {
      hourSegment.segments.forEach(segment => {
        delete segment.cssClass;
        if (
          this.selectedDayViewDate &&
          segment.date.getTime() === this.selectedDayViewDate.getTime()
        ) {
          segment.cssClass = 'cal-day-selected';
        }
      });
    });
  }

  sendAvailabilityClicked() {
    console.log('Function invoked', this.selectedDays);
  }
}
