import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { FormArray, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  navigationAccordionOpen = false;
  navigationClickable = true;
  currentApplicationLanguage = 'en';

  constructor(private router: Router) { }
    
  toggleNavigation(): void {
    this.navigationAccordionOpen = !this.navigationAccordionOpen;
  }

  disableNavigationMenu(): void {
    this.navigationClickable = false;
  }

  enableNavigationMenu(): void {
    this.navigationClickable = true;
  }

  currentPage(): string {
    return this.router.url;
  }

  MarkFormDirty(form: FormGroup | FormArray) {
    if (form.invalid) { 
      Object.keys(form.controls).forEach(key => {
        form.controls[key].markAsDirty();
      });
      return;
    }
  }
}
