import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AddPostService } from '../add-post.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Card } from 'src/app/card/card/card.model';
import { VariableService } from 'src/app/variable.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent implements OnInit {
  formGroup: FormGroup;
  file: File;
  constructor(private addPost: AddPostService, private dialogRef: MatDialogRef<AddPostComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Card, private variableService: VariableService) {
  }

  ngOnInit(): void {
    this.formGroup = this.addPost.form;
  }

  onImgUpload(img: any) {
    const file = img.target.files[0]
    this.formGroup.get('cardImg').setValue(file);
  }

  createCard() {
    this.variableService.markFormAsDirty(this.formGroup, false);
    if (this.formGroup.valid) {
      const card: Card = new Card;
      card.cardTitle = this.formGroup.get('cardTitle').value;
      card.cardTags = this.formGroup.get('cardTags').value;
      card.cardImg = (this.formGroup.get('cardImg').value).name;
      card.cardContent = (this.formGroup.get('cardContent').value);
      this.formGroup.reset();
      this.dialogRef.close({data: card});
    }
  }

  get cardTitle() {
    return this.formGroup.get('cardTitle') as FormControl;
  }
  get cardTags() {
    return this.formGroup.get('cardTags') as FormControl;
  }
  get cardImg() {
    return this.formGroup.get('cardImg');
  }
  get cardContent() {
    return this.formGroup.get('cardContent');
  }
}