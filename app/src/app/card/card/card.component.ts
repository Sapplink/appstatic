import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() imageURL: string;
  @Input() cardTitle: string;
  @Input() cardTags: string[];
  @Input() numberOfLikes: number;
  @Input() numberOfViews: number;

  constructor() { }

  ngOnInit(): void {
    this.imageURL = '../../../assets/images/ai_stock.jpg';
    this.cardTitle = 'Machine Learning with Finance';
    this.cardTags = ['AI', 'ML', 'Finance', 'Fintech', 'Blog'];
    this.numberOfLikes = 374;
    this.numberOfViews = 6723;
  }

  get shouldDisplayAllTags(): boolean {
    return this.cardTags.length < 3;
  }

  tagsGreaterThanThree() {
    const tags = this.cardTags.slice(0,3);
    return tags;
  }

}
