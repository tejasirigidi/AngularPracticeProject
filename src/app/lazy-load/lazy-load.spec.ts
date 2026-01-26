import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyLoad } from './lazy-load';

describe('LazyLoad', () => {
  let component: LazyLoad;
  let fixture: ComponentFixture<LazyLoad>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LazyLoad]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LazyLoad);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
