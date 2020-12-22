import { Injectable } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AddPostService {
  fb = new FormBuilder();
  form: FormGroup;
  constructor() {
    this.form = this.fb.group({
      cardTitle: ['', [Validators.required]],
      cardTags: ['', [Validators.required]],
      cardImg: new FormData(),
      cardContents: ['', [Validators.required]]
    })
  }

  createCard(form: FormGroup) {
    // Backend calls go create card. For now, all stored in UI.
    return form;
  }
}