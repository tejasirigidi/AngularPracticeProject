import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrewTimetable } from './crew-timetable';

describe('CrewTimetable', () => {
  let component: CrewTimetable;
  let fixture: ComponentFixture<CrewTimetable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CrewTimetable]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrewTimetable);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
