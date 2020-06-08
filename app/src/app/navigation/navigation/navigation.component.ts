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
    this.stateService.toggleNavigation();
  }

  get navigationAccordionStatus(): boolean {
    return this.stateService.navigationAccordionOpen;
  }
  
  // Title Hover Getters From Copydeck

  get openMenu(): string {
    return this.translate.instant('navigation.menuOpen');
  }  
  get closeMenu(): string {
    return this.translate.instant('navigation.menuClose');
  }

}
