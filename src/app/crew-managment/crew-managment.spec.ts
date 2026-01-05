import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrewManagment } from './crew-managment';

describe('CrewManagment', () => {
  let component: CrewManagment;
  let fixture: ComponentFixture<CrewManagment>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrewManagment]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrewManagment);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
