import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginform: FormGroup;
  floatLabelControl = new FormControl('auto');
  hide = true;
  constructor(fb: FormBuilder) {
    this.loginform = fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      floatLabel: this.floatLabelControl,
    });
  }

  ngOnInit(): void {}

  onSubmit() { console.log(this.loginform.value); }
}
