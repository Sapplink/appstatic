import { Injectable } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { StateService } from '../state.service';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  form: FormGroup;

  constructor(private stateService: StateService) {
    const fb = new FormBuilder();    
    this.form = fb.group({
      contactType: ['', Validators.required],
      projectInquiryType: ['',  Validators.required],
      userEmail: ['', Validators.required],
      mailSubject: ['', Validators.required],
      mailContent: ['', Validators.required]
    });
  }

  submitForm() {
    // http call here
    console.log(this.form);
    if (!this.form.valid) {
      this.stateService.markFormAsDirty(this.form, false);
    }
    return;
  }
}
