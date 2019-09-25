import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.scss']
})
export class PostListItemComponentComponent implements OnInit {

  @Input() title;
  @Input() content;
  @Input() loveIts;
  @Input() created_at;

  constructor() { }


  ngOnInit() {
  }

  increment_loveITs() {
    this.loveIts++;
  }
  decrement_loveITs() {
    this.loveIts--;
  }

}
