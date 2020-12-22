import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Aps360ProjectComponent } from './aps360-project.component';

describe('Aps360ProjectComponent', () => {
  let component: Aps360ProjectComponent;
  let fixture: ComponentFixture<Aps360ProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Aps360ProjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Aps360ProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
