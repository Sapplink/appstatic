import { Component, OnInit, EventEmitter } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss']
})
export class AboutPageComponent implements OnInit {
  closeDialog = new EventEmitter();

  constructor(public translate: TranslateService) { }

  ngOnInit(): void {
  }

}
