import { Component, OnInit } from '@angular/core';
import { ApiAccessService, Tweet } from '../shared/api.access.service';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-list-tweet',
  templateUrl: './list-tweet.component.html',
  styleUrls: ['./list-tweet.component.css']
})
export class ListTweetComponent implements OnInit {

  constructor(private auth:AuthService, private apiAccessService: ApiAccessService){}

  tweet:Tweet[]=[];

  ngOnInit(){
      this.apiAccessService.getMyTweet().subscribe((data)=>{

        this.tweet = data;

      })

    //this.tweet = []
   }



   onSelect(id:string):any
   {
     console.log("Hello"+ id);
     this.apiAccessService.deleteTweet(id).subscribe((result)=>{

      this.apiAccessService.getMyTweet().subscribe((data)=>{

        this.tweet = data;

      })

     });
   }



   onEdit(to:{id:string,message:string})
   {
     console.log(to)
    this.apiAccessService.updateMyTweet(to.id, to.message).subscribe((result)=>{

      this.apiAccessService.getMyTweet().subscribe((data)=>{

        this.tweet = data;

      })


    })
   }

}
