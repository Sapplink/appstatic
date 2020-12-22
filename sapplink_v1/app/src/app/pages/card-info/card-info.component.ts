import { Component, OnInit, EventEmitter, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Card } from 'src/app/card/card/card.model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-card-info',
  templateUrl: './card-info.component.html',
  styleUrls: ['./card-info.component.scss'],
  providers: [DatePipe]
})
export class CardInfoComponent implements OnInit {
  closeDialog = new EventEmitter();

  constructor(@Inject(MAT_DIALOG_DATA) public data: Card, private datePipe: DatePipe) {
  }

  ngOnInit(): void {
  }

  // Getter to be removed in Phase 2
  get cardTitle() {
    let title;
    if (this.data.cardLink === 'https://github.com/Sapplink/APS360Project') {
      title = 'aps360';
    } else if (this.data.cardLink === 'https://github.com/marcmerih/covid19-monte-carlo') {
      title = 'monte-carlo'
    } else if (this.data.cardLink === 'https://github.com/Sapplink/appstatic') {
      title = 'sapplink'
    } else {
      title = '';
    }
    return title;
  }

}
