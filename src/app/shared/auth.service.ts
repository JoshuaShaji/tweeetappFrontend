import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';
import { BehaviorSubject, throwError, Subject } from 'rxjs';
import { User } from '../auth/auth.model';
import { Router } from '@angular/router';
const headers = new Headers;


interface ResponseData {
    id: string;
    email: string;
    username: string;
}


@Injectable({
    providedIn: 'root'
})
export class AuthService implements OnInit {
    user = new BehaviorSubject<User|null>(null);
    //errorMessage: string = null;

    private tokenExpirationTime: any;
    constructor(private http: HttpClient, private route: Router) {
    }

    ngOnInit() {

    }



    onSignUp(email: string, password: string, contactNumber: string, username: string, firstName: string, lastName: string) {


        return this.http.post<ResponseData>('http://joshapplb-1870403985.us-east-1.elb.amazonaws.com/api/v1.0/tweets/registerUser',
            {
                username: username,
                password: password,
                email: email,
                firstName: firstName,
                lastName: lastName,
                contactNumber: contactNumber
            })
    }


    login(username: string, password: string) {
        return this.http
            .get<ResponseData>('http://joshapplb-1870403985.us-east-1.elb.amazonaws.com/api/v1.0/tweets/login?username=' + username + '&password=' + password
            ).pipe(tap((data) => {
                this.handleAuthentication(
                    data.email,
                    data.id,
                    data.username
                )
            }))

    }

    handleAuthentication(
        email: string,
        id: string,
        username: string,
    ) {
        const expirationDate = new Date(new Date().getTime() + 100000000);
        const user = new User(username, id, email, expirationDate);
        this.user.next(user);
        this.autoLogout(100000000)
        // store the token, so that doesn't get logout
        localStorage.setItem('userData', JSON.stringify(user))
        console.log(JSON.parse(localStorage.getItem('userData')!));
    }

    autoLogin(){
        const userData: {
            username: string,
            id: string,
            _token: string,
            _tokenExpirationDate: string
    
        } = JSON.parse(localStorage.getItem('userData')!);
        if (!userData) {
            return;
        }
        const loadedUser = new User(userData.username, userData.id, userData._token, new Date(userData._tokenExpirationDate))
        if (loadedUser.token) {
            this.user.next(loadedUser)
            const expirationDuration = new Date(userData._tokenExpirationDate).getTime() - new Date().getTime();
    
            this.autoLogout(expirationDuration)
        }
    }
    
    logout(){
        this.user.next(null);
        this.route.navigate(['/login']);
        localStorage.removeItem('userData');
        if (this.tokenExpirationTime) {
            clearTimeout(this.tokenExpirationTime)
        }
        this.tokenExpirationTime = null;
    }
    
    // remove the data from local storage after token expires
    autoLogout(expirationDuration: number){
    
        this.tokenExpirationTime = setTimeout(() => {
            this.logout();
        }, expirationDuration
        )
    
    
    
    }







}
