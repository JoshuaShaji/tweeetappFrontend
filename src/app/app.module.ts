import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './register/register.component';
import { AuthComponent } from './auth/auth.component';
import { AddTweetComponent } from './add-tweet/add-tweet.component';
import { AuthGuard } from './auth/auth-guard';
import { ApiAccessService } from './shared/api.access.service';
import { ListTweetComponent } from './list-tweet/list-tweet.component';
import { ListItemComponent } from './list-tweet/list-item/list-item.component';
import { GetAllTweetComponent } from './get-all-tweet/get-all-tweet.component';
import { DisplayTweetComponent } from './get-all-tweet/display-tweet/display-tweet.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { AuthGuardRoute } from './auth/authroute-guard';

const appRoutes: Routes = [
  { path: '', component: HeaderComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: AuthComponent },
  { path: 'posttweet', component: AddTweetComponent, canActivate:[AuthGuard] },
  { path: 'mytweet', component: ListTweetComponent, canActivate:[AuthGuard] },
  { path: 'alltweet', component: GetAllTweetComponent, canActivate:[AuthGuard] },
  {path:'forgetPassword', component:ForgetPasswordComponent, canActivate:[AuthGuardRoute]}
  
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RegisterComponent,
    AuthComponent,
    AddTweetComponent,
    ListTweetComponent,
    ListItemComponent,
    GetAllTweetComponent,
    DisplayTweetComponent,
    ForgetPasswordComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
