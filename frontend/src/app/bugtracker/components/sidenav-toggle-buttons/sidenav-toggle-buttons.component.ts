import { Location } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  Router,
  ActivatedRoute,
  UrlSegment,
  NavigationEnd,
} from '@angular/router';
import { BehaviorSubject, interval, of, Subscription } from 'rxjs';
import { filter, map, take } from 'rxjs/operators';
import { LoginService } from 'src/app/auth/login-services/login.service';

@Component({
  selector: 'app-sidenav-toggle-buttons',
  templateUrl: './sidenav-toggle-buttons.component.html',
  styleUrls: ['./sidenav-toggle-buttons.component.scss'],
})
export class SidenavToggleButtonsComponent implements OnInit, OnDestroy {
  // public supportedPaths = { login: 'login' };
  public selectedVal = '';
  public loggedIn = false;
  public sub: Subscription | null;
  public currentRoute: BehaviorSubject<string>;
  constructor(
    private login: LoginService,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location
  ) {
    this.sub = null;
    this.currentRoute = new BehaviorSubject<string>('');
  }

  ngOnInit() {
    //observe the authentication status
    this.sub = this.login.authenticated
      .asObservable()
      .subscribe((x) => (this.loggedIn = x));

    // get the initial value of the active child route.
    this.currentRoute.next(this.getCurrentlyActiveChildRoute());

    // observe router events to mark the currently active submodule.
    this.sub.add(
      this.router.events
        .pipe(filter((e): e is NavigationEnd => e instanceof NavigationEnd))
        .subscribe((e) => {
          let val = e.url.split('/').pop();
          // if val is null the application probably navigated to '/' and relied
          //  on redirects to get where it was supposed to go. this should get
          //  the right path, but send a console warning anyway.
          if (!val) {
            this.currentRoute.next(this.getCurrentlyActiveChildRoute());
            console.error(
              `SidenavToggleButtonsComponent got unexpected route.\n route value:${
                e.url
              }\n currentRoute set to: ${this.currentRoute.getValue()}`
            );
          } else this.currentRoute.next(val ? val : '/');
        })
    );

    // update selectedVal for the template.
    this.sub.add(this.currentRoute.subscribe((x) => (this.selectedVal = x)));
  }

  ngOnDestroy() {
    this.sub?.unsubscribe();
  }

  public onClick(val: string) {
    let searchstring = 'bugtracker/' + val.trim();
    this.router.navigate([searchstring]);
  }

  public getCurrentlyActiveChildRoute(): string {
    let route = '';
    this.route.firstChild?.url.pipe(take(1)).subscribe(
      (currUrl: UrlSegment[]) => {
        route = currUrl[0].path;
      },
      (err) => {
        console.error(
          `SidenavToggleButtonsComponent - getCurrentlyActiveChildRoute this.route.firstChild was likely null \n ${err}`
        );
      }
    );
    return route;
  }
}
