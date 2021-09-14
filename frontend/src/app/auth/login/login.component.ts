import { computeDecimalDigest } from '@angular/compiler/src/i18n/digest';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router, UrlTree } from '@angular/router';
import { LoginService } from '../login-services/login.service';

@Component({
  selector: 'auth-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  auth: LoginService;
  loginform: FormGroup;
  floatLabelControl = new FormControl('auto');
  hide = true;
  constructor(fb: FormBuilder, auth: LoginService, private router: Router, private route: ActivatedRoute) {
    this.loginform = fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      floatLabel: this.floatLabelControl,
    });
    this.auth = auth;
  }

  ngOnInit(): void {}

  onSubmit() {
    this.auth.login(
      this.loginform.get('username')?.value,
      this.loginform.get('password')?.value,
      (x: string | null) => {
        if (!x) this.router.navigate(['../'], {relativeTo: this.route});
        else this.router.navigate([x]);
      }
    );
  }

  //TODO: remove these three functions for production.
  // these functions should not appear in production code.
  onUserClick() {
    this.auth.login('user', 'password', (x: string|null)=>{
      if (!x) this.router.navigate(['../'], {relativeTo: this.route});
      else this.router.navigate([x]);
    });
  }
  onTechClick() {
    this.auth.login('tech', 'password', (x: string|null)=>{
      if (!x) this.router.navigate(['../'], {relativeTo: this.route});
      else this.router.navigate([x]);
    });
  }

  onAdminClick() {
    this.auth.login('admin', 'password', (x: string|null)=>{
      if (!x) this.router.navigate(['../'], {relativeTo: this.route});
      else this.router.navigate([x]);
    });
  }
}
