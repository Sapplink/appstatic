import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CardInfoComponent } from 'src/app/pages/card-info/card-info.component';
import { Card } from './card.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() imageURL: string;
  @Input() cardContent: string;
  @Input() cardTitle: string;
  @Input() cardTags: string;
  @Input() cardLink: string;
  tags: string[];

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
    if (this.cardTags && this.cardTags.includes(',')) {
      this.tags = this.cardTags.split(',');
    }
    // else if (this.cardTags && !this.cardTags.includes(',')) {
    //   this.tags = (this.cardTags.split(' '));
    // }
  }

  get shouldDisplayAllTags(): boolean {
    if (this.tags) {
      return this.tags.length <= 3;
    }
  }

  tagsGreaterThanThree() {
    if (this.tags) {
      const tags = this.tags.slice(0,3);
      return tags;
    }
  }

  openCardInfo() {
    const card: Card = {
      cardContent: this.cardContent,
      cardTags: this.tags,
      cardTitle: this.cardTitle,
      cardImg: this.imageURL,
      cardLink: this.cardLink
    };

    let dialogRef = this.dialog.open(CardInfoComponent, {
      height: '100vh',
      width: '100vw',
      disableClose: false,
      data: card
    });
    const subscription = dialogRef.componentInstance.closeDialog.subscribe(() => {
      dialogRef.close();
    });
  }

}
