import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  navigationAccordionOpen = false;
  navigationClickable = true;
  currentApplicationLanguage = 'en';

  constructor() { }
    
  toggleNavigation(): void {
    this.navigationAccordionOpen = !this.navigationAccordionOpen;
  }

  disableNavigationMenu(): void {
    this.navigationClickable = false;
  }

  enableNavigationMenu(): void {
    this.navigationClickable = true;
  }
}
