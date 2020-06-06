import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss']
})
export class AboutPageComponent implements OnInit {
  closeDialog = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
