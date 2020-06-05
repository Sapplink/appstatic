import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  hamburger = document.querySelector(".hamburger");

  constructor(private translate:TranslateService){
    translate.setDefaultLang('en');
  }

  ngOnInit(): void {
    // On click
    this.hamburger.addEventListener("click", function() {
      this.hamburger.classList.toggle("is-active");
      // add menu opening here
    });
  }

  get projectsButtonHover(): string {
    return this.translate.instant('landingPage.contents.buttons.projectsButtonHover');
  }
  get designsButtonHover(): string {
    return this.translate.instant('landingPage.contents.buttons.designsButtonHover');
  }

}
