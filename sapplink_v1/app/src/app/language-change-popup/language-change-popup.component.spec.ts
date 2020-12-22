import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguageChangePopupComponent } from './language-change-popup.component';

describe('LanguageChangePopupComponent', () => {
  let component: LanguageChangePopupComponent;
  let fixture: ComponentFixture<LanguageChangePopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LanguageChangePopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LanguageChangePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
