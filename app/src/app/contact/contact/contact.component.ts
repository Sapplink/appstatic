import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactTypes = [];
  projectTypes = [];
  formGroup: FormGroup;

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
  }

}
