import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

import { UserPrinciple } from '../../bugtracker/shared/user-interface';
import { TestMessage } from 'src/app/bugtracker/shared/test-message';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  AUTH_API = 'http://localhost:8080/user/';

  principal: UserPrinciple | null;
  authheader: HttpHeaders | null;
  redirectUrl: string | null;
  authenticated: BehaviorSubject<boolean>;

  constructor(private http: HttpClient) {
    this.principal = null;
    this.authheader = null;
    this.redirectUrl = null;
    this.authenticated = new BehaviorSubject<boolean>(false);
  }

  // use this function instead of checking properties. the properties will be
  // null if not authenticated
  public isAuthenticated(): boolean {
    return this.authenticated.getValue();
  }

  public login(username: string, password: string, callback: Function) {
    // skip if logged in
    if (this.isAuthenticated()) {
      return callback && callback();
    }
    const header = new HttpHeaders({
      authorization: 'Basic ' + btoa(username + ':' + password),
    });
    this.authheader = header;

    this.http
      .get<UserPrinciple>(this.AUTH_API, { headers: this.authheader })
      .subscribe((response: UserPrinciple) => {
        if (response['enabled']) {
          this.principal = response;
          this.authenticated.next(true);
        }
        if (this.redirectUrl) {
          const url = this.redirectUrl;
          this.redirectUrl = null;
          return callback && callback(url);
        }
        return callback && callback();
      }, err => {
        console.warn('LoginService - there was an error in login()!\n', err);
      });
  }

  logout(): true {
    this.authenticated.next(false);
    this.principal = null;
    this.authheader = null;
    this.redirectUrl = null;
    return true;
  }

  public test() {
    this.http
      .get<TestMessage>('http://localhost:8080/test')
      .subscribe((response: TestMessage) => {
        console.log(response);
      }, err => {
        console.warn('there was an error in test()!\n', err);
      });
  }

  public securetest() {
    let header;
    if (this.authheader) header = this.authheader;
    else
      header = new HttpHeaders({
        authorization: 'Basic ' + btoa('' + ':' + ''),
      });

    this.http
      .get<TestMessage>('http://localhost:8080/securetest', {
        headers: header,
      })
      .subscribe((response: TestMessage) => {
        console.log(response);
      }, err => {
        console.warn('there was an error in securetest()!\n', err);
      });
  }
}
