import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationComponent } from './navigation.component';
import { TranslateService } from '@ngx-translate/core';
import { translateServiceSpy } from 'src/app/tests/index-spies';

describe('NavigationComponent', () => {
  let component: NavigationComponent;
  let fixture: ComponentFixture<NavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavigationComponent ],
      providers: [
        {
          provide: TranslateService,
          useValue: translateServiceSpy
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationComponent);
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
