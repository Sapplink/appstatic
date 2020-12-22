import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CovidMonteCarloComponent } from './covid-monte-carlo.component';

describe('CovidMonteCarloComponent', () => {
  let component: CovidMonteCarloComponent;
  let fixture: ComponentFixture<CovidMonteCarloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CovidMonteCarloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CovidMonteCarloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
