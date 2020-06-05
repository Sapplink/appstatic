import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  navigationAccordionOpen = false;

  constructor(private translate:TranslateService){
    translate.setDefaultLang('en');
  }

  ngOnInit(): void {
  }

  toggleNavigation(): void {
    this.navigationAccordionOpen = !this.navigationAccordionOpen;
  }

  get projectsButtonHover(): string {
    return this.translate.instant('landingPage.contents.buttons.projectsButtonHover');
  }
  get designsButtonHover(): string {
    return this.translate.instant('landingPage.contents.buttons.designsButtonHover');
  }

}
