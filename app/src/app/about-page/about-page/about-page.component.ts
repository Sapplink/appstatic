import { Component, OnInit, EventEmitter, AfterContentChecked } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { StateService } from 'src/app/variable.service';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss']
})
export class AboutPageComponent implements OnInit {
  closeDialog = new EventEmitter();

  constructor(public translate: TranslateService, private stateService: StateService) { }

  ngOnInit(): void {
  }

}
