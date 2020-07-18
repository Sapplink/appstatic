import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';
import { FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { VariableService } from 'src/app/variable.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactTypesEN = [];
  contactTypesTR = [];
  projectTypesEN = [];
  projectTypesTR = [];
  formGroup: FormGroup;
  formSubscriptions: Subscription;

  constructor(private contactService: ContactService, private variableService: VariableService) {
    this.formGroup = this.contactService.form;
    this.contactTypesEN = [
      'Project Inquiry',
      'Networking',
      'Contracting',
      'Partnerships'
    ]
    this.contactTypesTR = [
      'Proje Talebi',
      'Sosyal Ağ',
      'Kontrat',
      'Ortaklık'
    ]
    this.projectTypesEN = [
      'Web Development (UX + Full Stack)',
      'Graphic Design'
    ]
    this.projectTypesTR = [
      'Web Tasarim ve Uygulama (UX + Tam Yığın)',
      'Grafik Tasarım'
    ]
  }

  ngOnInit(): void {
    
  }
  submitForm() {
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
