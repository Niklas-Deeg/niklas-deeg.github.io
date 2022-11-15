import { Injectable, OnInit } from '@angular/core';
import { User } from './user.model';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { ConfigService } from './config.service';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import { Router } from '@angular/router';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {

  endpoint: string = this.configService.getApiEndpoint();
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  currentUser = {};
  constructor(private configService: ConfigService, private http: HttpClient, public router: Router) {

  }

  // Sign-up
  signUp(user: User): Observable<any> {
    let api = `${this.endpoint}/register-user`;
    return this.http.post(api, user).pipe(catchError(this.handleError));
  }
  // Sign-in
  signIn(user: User) {
    console.log('endpoint: ' + this.endpoint);
    console.log('is Prod: ' + this.configService.getEnviroment());
    return this.http
      .post<any>(`${this.endpoint}/Token`, user);
      //.subscribe((res: any) => {
      //  console.log(res.text());
      //  //localStorage.setItem('access_token', res.body());
      //  //this.getUserProfile(res._id).subscribe((res) => {
      //  //  this.currentUser = res;
      //  //  this.router.navigate(['user-profile/' + res.msg._id]);
      //  //});
      //});
  }
  getToken() {
    return localStorage.getItem('access_token');
  }

  getExpDate() {
    let expDate = localStorage.getItem('expDate');
    if (expDate !== null) {
      return JSON.parse(expDate).timestamp as moment.Moment;
    }
    return 0;
  }

  get isLoggedIn(): boolean {
    let authToken = this.getToken();
    let expDate = this.getExpDate();
    let nowDate = moment(moment.now());
    var object = { value: "value", timestamp: nowDate };
    var jString = JSON.stringify(object);
    nowDate = JSON.parse(jString).timestamp as moment.Moment;
    console.log('expDate: ' + expDate);
    console.log('nowDate: ' + nowDate);
    if (expDate > nowDate) {
      //expDate ok
      console.log('Token: ' + authToken);
      return authToken !== null ? true : false;
    }
    else {
      console.log('Token expired');
      this.doLogout();
      return false;
    }   
  }

  doLogout() {
    let removeToken = localStorage.removeItem('access_token');
    let expDate = localStorage.removeItem('expDate');
    if (removeToken == null) {
      this.router.navigate(['login']);
    }
  }
  // User profile
  getUserProfile(id: any): Observable<any> {
    let api = `${this.endpoint}/user-profile/${id}`;
    return this.http.get(api, { headers: this.headers }).pipe(
      map((res) => {
        return res || {};
      }),
      catchError(this.handleError)
    );
  }
  // Error
  handleError(error: HttpErrorResponse) {
    let msg = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      msg = error.error.message;
    } else {
      // server-side error
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(msg);
  }
}
