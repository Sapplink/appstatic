import { Injectable } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

const fb = new FormBuilder();

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  form: FormGroup;

  constructor() {
    this.form = fb.group({
      contactType: ['', [Validators.required]],
      projectInquiryType: ['',  [Validators.required]],
      userEmail: ['', [Validators.required]],
      mailSubject: ['', [Validators.required]],
      mailContent: ['', [Validators.required]]
    });
  }

  submitForm() {
    // http call here
    return;
  }
}
