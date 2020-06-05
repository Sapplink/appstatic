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


  // Title Hover Getters From Copydeck

  get openMenu() {
    return this.translate.instant('navigation.menuOpen');
  }  
  get closeMenu() {
    return this.translate.instant('navigation.menuClose');
  }
  get aboutFounder(): string {
    return this.translate.instant('landingPage.contents.founderHover');
  }
  get projectsButtonHover(): string {
    return this.translate.instant('landingPage.contents.buttons.projectsButtonHover');
  }
  get designsButtonHover(): string {
    return this.translate.instant('landingPage.contents.buttons.designsButtonHover');
  }
  get utefaTitle(): string {
    return this.translate.instant('landingPage.clientelle.utefa');
  }
  get intactTitle(): string {
    return this.translate.instant('landingPage.clientelle.intact');
  }

}
