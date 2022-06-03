import { Component, Input, OnInit } from '@angular/core';
import { ApiAccessService, Tweet } from 'src/app/shared/api.access.service';

@Component({
  selector: 'app-display-tweet',
  templateUrl: './display-tweet.component.html',
  styleUrls: ['./display-tweet.component.css']
})
export class DisplayTweetComponent implements OnInit {

  @Input() tweet!: Tweet;
  @Input() i!: number;
  constructor(private apiAccessService: ApiAccessService) { }

  ngOnInit(): void {
  }

  onTweetLike(id:string){

    console.log(id)
    this.apiAccessService.likeTweet(id);

  }

}
