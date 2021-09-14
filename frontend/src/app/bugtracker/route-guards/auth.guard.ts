import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  Router,
  RouterStateSnapshot,
  Routes,
  UrlTree,
} from '@angular/router';
import { LoginService } from 'src/app/auth/login-services/login.service';

// ***********************************************************************
// this service redirects the user to login if they are not currently
//  logged in
// ***********************************************************************
@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate, CanActivateChild {
  constructor(private login: LoginService, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): true | UrlTree {
    const url: string = state.url;
    return this.checkLogin(url);
  }

  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): true | UrlTree {
    return this.canActivate(route, state);
  }

  checkLogin(url: string): true | UrlTree {
    if (this.login.isAuthenticated()) {
      return true;
    }
    // set the redirect url unless already going to login.
    if (!url) this.login.redirectUrl = '/bugtracker/user';
    else if (url == '/bugtracker/login') return true;
    this.login.redirectUrl = url;

    // redirect to login if not already there.
    if (url != '/bugtracker/login')
      return this.router.parseUrl('/bugtracker/login');
    return true;
  }
}
