import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrewProfileUser } from './crew-profile-user';

describe('CrewProfileUser', () => {
  let component: CrewProfileUser;
  let fixture: ComponentFixture<CrewProfileUser>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrewProfileUser]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrewProfileUser);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
