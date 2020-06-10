import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingPageComponent } from './landing-page.component';
import { TranslateService } from '@ngx-translate/core';
import { translateServiceSpy, matDialogSpy } from 'src/app/tests/index-spies';
import { MatDialog } from '@angular/material/dialog';

describe('LandingPageComponent', () => {
  let component: LandingPageComponent;
  let fixture: ComponentFixture<LandingPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingPageComponent ],
      providers: [
        {
          provide: TranslateService,
          useValue: translateServiceSpy
        },
        {
          provide: MatDialog,
          useValue: matDialogSpy
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    
    translateServiceSpy['instant'].calls.reset();
    translateServiceSpy['addLangs'].calls.reset();
    translateServiceSpy['use'].calls.reset();
    matDialogSpy['open'].calls.reset();
    matDialogSpy['close'].calls.reset();
    matDialogSpy['afterClosed'].calls.reset();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
