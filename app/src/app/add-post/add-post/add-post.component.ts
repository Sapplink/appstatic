import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AddPostService } from '../add-post.service';
import { MatDialogRef } from '@angular/material/dialog';
import { Card } from 'src/app/card/card/card.model';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent implements OnInit {
  formGroup: FormGroup;
  constructor(private addPost: AddPostService, private dialogRef: MatDialogRef<AddPostComponent>) {
  }

  ngOnInit(): void {
    this.formGroup = this.addPost.form;
  }

  onImgUpload(img) {
    let url;
    if (img.target.files && img.target.files[0]) {
      var reader = new FileReader();
      reader.readAsDataURL(img.target.files[0]); // read file as data url
      reader.onload = (img) => { // called once readAsDataURL is completed
        url = img.target.result;
      }
    }
    // console.log(url);
    this.formGroup.get('cardImg').setValue('../../../../assets/INTACT_LOGO.png');
  }

  createCard() {
    const card: Card = new Card;
    card.cardTitle = this.formGroup.get('cardTitle').value;
    card.cardTags = this.formGroup.get('cardTags').value;
    card.cardImg = this.formGroup.get('cardImg').value;
    this.dialogRef.close(card);
  }

  get cardTitle() {
    return this.formGroup.get('cardTitle') as FormControl;
  }
  get cardTags() {
    return this.formGroup.get('cardTags') as FormControl;
  }
  get cardImg() {
    return this.formGroup.get('cardImg') as FormControl;
  }
}
