import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../services/auth.service";
import {Clipboard} from "@angular/cdk/clipboard";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  formGroup: FormGroup;
  hide: boolean = true;

  constructor(
    private authService: AuthService,
    private clipBoard: Clipboard,
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

  copyToClipBoard(value: string) {
    this.clipBoard.copy(value);
  }

}
