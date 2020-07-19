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
  myDate: Date;

  constructor(@Inject(MAT_DIALOG_DATA) public data: Card, private datePipe: DatePipe) {
    this.myDate = new Date();
  }

  ngOnInit(): void {
  }

}
