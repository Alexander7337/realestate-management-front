import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaseOutComponent } from './lease-out.component';

describe('LeaseOutComponent', () => {
  let component: LeaseOutComponent;
  let fixture: ComponentFixture<LeaseOutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeaseOutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaseOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
