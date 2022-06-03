import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Tweet } from '../../shared/api.access.service'

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css'],
})
export class ListItemComponent implements OnInit {
  a = false;

  @Input() tweet!: Tweet;
  @Input() i!: number;

  constructor() {}

  ngOnInit(): void {
    console.log(this.tweet);
  }

  @Output() selected = new EventEmitter<any>();

  @Output() value = new EventEmitter<{ id: string; message: string }>();

  onSelcted(id: string) {
    this.selected.emit(id);
  }

  updatedTweet = '';

  onEdit() {
    this.a = true;
  }

  onSubmit(id: string) {
    this.a = false;
    this.value.emit({ id: id, message: this.updatedTweet});
  }

  onClose(){
    this.a = false;
  }
}