import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() imageURL: string;
  @Input() cardTitle: string;
  @Input() cardTags: string;
  tags: string[];

  constructor() { }

  ngOnInit(): void {
    if (this.cardTags && this.cardTags.includes(',')) {
      this.tags = this.cardTags.split(',');
    }
  }

  get shouldDisplayAllTags(): boolean {
    if (this.tags) {
      return this.tags.length < 3;
    }
  }

  tagsGreaterThanThree() {
    if (this.tags) {
      const tags = this.tags.slice(0,3);
      return tags;
    }
  }

}
