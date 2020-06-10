import { Component, OnInit } from '@angular/core';
import { StateService } from 'src/app/state.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor(private stateService: StateService,
    private translate: TranslateService) { }

  ngOnInit(): void {
  }

  toggleNavigationBar() {
    if (!this.navigationDisabled) {
      this.stateService.toggleNavigation();
    }
  }

  get navigationAccordionStatus(): boolean {
    return this.stateService.navigationAccordionOpen;
  }

  get navigationDisabled(): boolean {
    return (this.stateService.navigationClickable === false);
  }

  get navigationMenuStyling() {
    return ((this.navigationAccordionStatus) ? 'col-md-12 language-bar-open' : 'col-md-12 language-bar-closed');
  }
  
  // Title Hover Getters From Copydeck
  get openMenu(): string {
    return this.translate.instant('navigation.menuOpen');
  }  
  get closeMenu(): string {
    return this.translate.instant('navigation.menuClose');
  }

}
