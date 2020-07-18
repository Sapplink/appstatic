import { Component, OnInit, Inject, EventEmitter, Output } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { VariableService } from '../variable.service';

@Component({
  selector: 'app-language-change-popup',
  templateUrl: './language-change-popup.component.html',
  styleUrls: ['./language-change-popup.component.scss']
})
export class LanguageChangePopupComponent implements OnInit {
  @Output() changeLanguage = new EventEmitter();
  @Output() closeDialog = new EventEmitter();

  constructor(@Inject(MAT_DIALOG_DATA) public data: string,
  private variableService: VariableService) { }

  ngOnInit(): void {
  }

  toggleLanguage() {
    this.variableService.currentApplicationLanguage = this.data;
    this.changeLanguage.emit();
  }

  cancelLanguageChange() {
    this.closeDialog.emit();
  }

  get language() {
    return (this.data === 'tr') ? 'Turkish' : 'English'
  }

}
