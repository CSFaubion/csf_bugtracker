import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { LoginService } from '../login-services/login.service';

@Component({
  selector: 'auth-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss'],
})
export class LogoutComponent implements OnInit, OnDestroy {
  constructor(private auth: LoginService, private router: Router, private route: ActivatedRoute) {
    this.authenticated = auth.authenticated.asObservable();
    this.sub = null;
    this.authorized = false;
  }
  sub: Subscription | null;
  authenticated: Observable<boolean>;
  authorized: boolean;

  ngOnInit(): void {
    this.sub = this.authenticated.subscribe(
      next => {
        // // ::DEBUG::
        // console.log('LogoutComponent observing auth status...status=', next);
        this.authorized = next;
      },
      err => {
        console.log(err);
      },
      () => {
        console.log('LogoutComponent unsubscribed from auth status');
      }
    );
  }

  ngOnDestroy() {
    this.sub?.unsubscribe();
  }

  OnClick() {
    this.auth.logout();
    // console.log(this.route)
    this.router.navigate(['./login'], {relativeTo: this.route});
  }
}
