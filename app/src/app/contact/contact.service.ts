import { Injectable } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

const fb = new FormBuilder();

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  form: FormGroup;

  constructor() {
    this.form = fb.group({
      contactType: [''],
      projectInquiryType: [''],
      userEmail: [''],
      mailSubject: [''],
      mailContent: ['']
    });
  }

  submitForm() {
    // http call here
    return;
  }
}
