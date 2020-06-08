import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  navigationAccordionOpen = false;

  constructor() { }
    
  toggleNavigation(): void {
    this.navigationAccordionOpen = !this.navigationAccordionOpen;
  }
}
