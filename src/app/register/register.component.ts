import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  error:any;
  constructor(private authService:AuthService) { }
  success:boolean= false;
  ngOnInit(): void {
  }

  async onSubmit(form:NgForm){
    this.success =false;
    this.error = null;
    const email = form.value.email;
    const password = form.value.password;
    const contactNumber = form.value.contactNumber;
    const username = form.value.username;
    const firstName = form.value.firstName;
    const lastName = form.value.lastName;

    this.authService.onSignUp(email, password, contactNumber, username, firstName, lastName).subscribe((data)=>{
      console.log(data)
      this.success = true;
    }, error=>{
      this.error = error.error.message;

    })



    }
  }


