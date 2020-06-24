import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Routes } from '../app/app.model'
import { LandingPageComponent } from './landing-page/landing-page/landing-page.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  url: Routes = {
    path: '/landing-page',
    component: 'LandingPageComponent'
  }
  
  constructor(public translate: TranslateService, public router: Router) {
  }

  title = 'app';

  ngOnInit() {
    this.setApplicationLanguage()
    this.navigateTo(this.url);
  }

  setApplicationLanguage(): void {
    // To be edited when Turkish is added.
    this.translate.addLangs(['en', 'tr']);
    this.translate.setDefaultLang('en');
    this.translate.use('en');
  }

  navigateTo(url: Routes): void {
    // To be updated when app initializer created
    this.router.navigate([url.path]);
  }
}
