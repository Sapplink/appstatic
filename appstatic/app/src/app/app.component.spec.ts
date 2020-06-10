import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateService, TranslatePipe } from '@ngx-translate/core';
import { translateServiceSpy } from './tests/index-spies';
import { CustomTranslatePipe, CustomTranslateService } from './tests/index-pipes';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent,
        CustomTranslatePipe
      ],
      providers: [
        {
          provide: TranslateService,
          useValue: CustomTranslateService
        },
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    // translateServiceSpy['instant'].calls.reset();
    // translateServiceSpy['addLangs'].calls.reset();
    // translateServiceSpy['use'].calls.reset();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'app'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('app');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('app app is running!');
  });
});
