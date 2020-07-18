import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { VariableService } from 'src/app/variable.service';
import { TranslateService } from '@ngx-translate/core';
import { MatDialog } from '@angular/material/dialog';
import { LanguageChangePopupComponent } from 'src/app/language-change-popup/language-change-popup.component';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  @Output() changeLanguage = new EventEmitter();

  constructor(private variableService: VariableService,
    public dialog: MatDialog,
    private translate: TranslateService) { }

  ngOnInit(): void {
  }

  toggleNavigationBar() {
    if (!this.navigationDisabled) {
      this.variableService.toggleNavigation();
    }
  }

  toggleLanguageTo(lang: string) {
    if (this.variableService.currentApplicationLanguage !== lang) {
      let dialogRef = this.dialog.open(LanguageChangePopupComponent, {
        autoFocus: true,
        height: '36vh',
        width: '45vw',
        disableClose: false,
        data: lang
      });
      const cancelSubscription = dialogRef.componentInstance.closeDialog.subscribe(() => {
        dialogRef.close();
      });
      const changeLanguage = dialogRef.componentInstance.changeLanguage.subscribe(() => {
        this.changeLanguage.emit();
        dialogRef.close();
      });
    }
  }

  get navigationAccordionStatus(): boolean {
    return this.variableService.navigationAccordionOpen;
  }

  get navigationDisabled(): boolean {
    return (this.variableService.navigationClickable === false);
  }

  get navigationMenuStyling() {
    return ((this.navigationAccordionStatus) ? 'col-md-12 language-bar-open' : 'col-md-12 language-bar-closed');
  }
  
  // Title Hover Getters From Copydeck
  get openMenu(): string {
    return this.translate.instant('navigation.menuOpen');
  }  
  get closeMenu(): string {
    return this.translate.instant('navigation.menuClose');
  }

}
