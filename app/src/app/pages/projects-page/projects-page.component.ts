import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/card/card/card.model';
import { MatDialog } from '@angular/material/dialog';
import { AddPostComponent } from 'src/app/add-post/add-post/add-post.component';
import { VariableService } from 'src/app/variable.service';

@Component({
  selector: 'app-projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.scss']
})
export class ProjectsPageComponent implements OnInit {
  cards: Array<Card> = []; // must be updated when backend is created. this is only intermediary
  constructor(public dialog: MatDialog, private variableService: VariableService) {
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
}
