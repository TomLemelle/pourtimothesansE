import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  formGroup: FormGroup;
  hide: boolean = true;

  constructor(
    private authService: AuthService
  ) {
    this.formGroup = new FormGroup({
        email: new FormControl('', [Validators.email]),
        password: new FormControl('', [Validators.minLength(3), Validators.maxLength(4)]),
      }
    );
  }

  ngOnInit(): void {
  }

  submit():void {
    this.authService.authenticate(this.formGroup.get('login')?.value, this.formGroup.get('password')?.value);
  }

}
