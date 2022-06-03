import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { async } from '@angular/core/testing';
import { AuthService } from '../shared/auth.service';



@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  error=null;
  constructor(private authService:AuthService, private route:Router) { }

  ngOnInit(){
}
 
async onSubmit(form:NgForm){
    this.error = null
    const username = form.value.username;
    const password = form.value.password
    this.authService.login(username, password).subscribe(
          (data)=>{
            console.log(data)
            this.route.navigate(['/posttweet'])
        }, errorResp=>{
            this.error = errorResp.error.message;
            form.reset();

        })

     


}
}