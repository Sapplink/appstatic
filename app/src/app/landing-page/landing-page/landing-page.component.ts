import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MatDialog } from '@angular/material/dialog';
import { AboutPageComponent } from '../../about-page/about-page/about-page.component';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  constructor(private translate:TranslateService, 
    public dialog: MatDialog) {
  }

  ngOnInit(): void {
  }

  openFounder(): void {
    let dialogRef = this.dialog.open(AboutPageComponent, {
      autoFocus: true,
      height: '68vh',
      width: '68vw'
    });
    const subscription = dialogRef.componentInstance.closeDialog.subscribe(() => {
      dialogRef.close();
    });
    dialogRef.afterClosed().subscribe(() => {
      subscription.unsubscribe();
    });
  }


  // Title Hover Getters From Copydeck

  get aboutFounder(): string {
    return this.translate.instant('landingPage.contents.founderHover');
  }
  get projectsButtonHover(): string {
    return this.translate.instant('landingPage.contents.buttons.projectsButtonHover');
  }
  get designsButtonHover(): string {
    return this.translate.instant('landingPage.contents.buttons.designsButtonHover');
  }
  get utefaTitle(): string {
    return this.translate.instant('landingPage.clientelle.utefa');
  }
  get intactTitle(): string {
    return this.translate.instant('landingPage.clientelle.intact');
  }

}
