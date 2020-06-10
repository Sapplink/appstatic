import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutPageComponent } from './about-page.component';
import { TranslateService, TranslatePipe } from '@ngx-translate/core';
import { translateServiceSpy } from 'src/app/tests/index-spies';

describe('AboutPageComponent', () => {
  let component: AboutPageComponent;
  let fixture: ComponentFixture<AboutPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutPageComponent ],
      providers: [
        {
          provide: TranslateService,
          useValue: TranslatePipe
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    
    translateServiceSpy['instant'].calls.reset();
    translateServiceSpy['addLangs'].calls.reset();
    translateServiceSpy['use'].calls.reset();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
