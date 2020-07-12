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

  markFormAsDirty(form: FormGroup | FormArray, updateValue: boolean) {
    Object.keys(form.controls).forEach(field => {
      const control = form.get(field) as FormGroup;
      if (control) {
        if (control.controls) {
          this.markFormAsDirty(control, updateValue);
        } else {
          control.markAsTouched({onlySelf: false});
          control.markAsDirty({onlySelf: false});
        }
        if (updateValue) {
          control.updateValueAndValidity();
        }
      }
    })
  }
}
