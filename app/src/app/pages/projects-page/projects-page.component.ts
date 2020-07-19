import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/card/card/card.model';
import { MatDialog } from '@angular/material/dialog';
import { AddPostComponent } from 'src/app/add-post/add-post/add-post.component';
import { VariableService } from 'src/app/variable.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.scss']
})
export class ProjectsPageComponent implements OnInit {
  cards: Array<Card> = []; // must be updated when backend is created. this is only intermediary
  constructor(public dialog: MatDialog, private variableService: VariableService,
    private translate: TranslateService) {
  }

  ngOnInit(): void {
  }

  addPost() {
    let dialogRef = this.dialog.open(AddPostComponent,
    {
      height: '50vh',
      width: '55vw',
      disableClose: false,
    });
    dialogRef.afterClosed().subscribe((data: Card) => {
      if (data) {
        this.cards.push(data);
      }
    });
  }

  get inProduction() {
    return this.variableService.isInProduction;
  }

  // These getters to be moved to Database once RL and DB created.

  get photoClassificationContent(): string {
    return this.translate.instant('projectsPage.aps360Content');
  }

  get monteCarloContent(): string {
    return this.translate.instant('projectsPage.monteCarloContent');
  }

  get utefaContent(): string {
    return this.translate.instant('projectsPage.utefaContent');
  }

  get sapplinkContent(): string {
    return this.translate.instant('projectsPage.sapplinkContent');
  }
}
