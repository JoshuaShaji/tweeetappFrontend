import { Component, OnInit } from '@angular/core';
import { ApiAccessService, Tweet } from '../shared/api.access.service';

@Component({
  selector: 'app-get-all-tweet',
  templateUrl: './get-all-tweet.component.html',
  styleUrls: ['./get-all-tweet.component.css']
})
export class GetAllTweetComponent implements OnInit {

  constructor(private apiAccessService: ApiAccessService) { }
  tweet:Tweet[]=[]
  ngOnInit(): void {

    this.apiAccessService.getAllTweets().subscribe((data)=>{
      this.tweet = data;
    })


  }

}
