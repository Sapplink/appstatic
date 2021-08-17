import { Injectable } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { VariableService } from '../variable.service';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  FormData: FormGroup;
  private api = 'https://mailthis.to/merih.atasoy@gmail.com';

  constructor(private variableService: VariableService, private http: HttpClient) {
    const fb = new FormBuilder();    
    this.FormData = fb.group({
      contactType: ['', Validators.required],
      projectInquiryType: ['',  Validators.required],
      userEmail: ['', Validators.required],
      mailSubject: ['', Validators.required],
      mailContent: ['', Validators.required]
    });
    console.log(this.isAlphaRelease);
    // if (this.isAlphaRelease) {
    //   this.FormData.disable();
    // }
  }

  submitForm(input: any) {
    // http call here
    return this.http.post(this.api, input, {responseType: 'text'}).pipe(
      map(
        (response) => {
          if (response) {
            return response;
          }
        },
        (error: any) => {
          return error;
        }
      )
    );
  }

  get isAlphaRelease() {
    return (this.variableService.release === 'alpha');
  }
}
