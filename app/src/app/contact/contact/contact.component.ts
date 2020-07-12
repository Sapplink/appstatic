import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';
import { FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactTypes = [];
  projectTypes = [];
  formGroup: FormGroup;
  formSubscriptions: Subscription;

  constructor(private contactService: ContactService) {
    this.formGroup = this.contactService.form;
    this.contactTypes = [
      'Project Inquiry',
      'Networking',
      'Contracting',
      'Partnerships'
    ]
    this.projectTypes = [
      'Web Development (UX + Full Stack)',
      'Graphic Design'
    ]
  }

  ngOnInit(): void {
    console.log(this.formGroup);
  }
  submitForm() {
    console.log(this.formGroup);
    if (this.formGroup.get('contactType').value && 
      this.formGroup.get('projectInquiryType').value &&
      this.formGroup.get('contactType').value !== 'Project Inquiry') {
        this.formGroup.get('projectInquiryType').setValue('');
    }
    this.contactService.submitForm();
  }

  get shouldDisplayProjectTypes() {
    if (this.formGroup.get('contactType').value) {
      return (this.formGroup.get('contactType').value === 'Project Inquiry');
    }
  }
}
