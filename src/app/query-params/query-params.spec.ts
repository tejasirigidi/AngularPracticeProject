import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueryParams } from './query-params';

describe('QueryParams', () => {
  let component: QueryParams;
  let fixture: ComponentFixture<QueryParams>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QueryParams]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QueryParams);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
