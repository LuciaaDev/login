import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginData } from 'src/app/core/components/login-data';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy{

  @Output() isValidLogin = new EventEmitter<LoginData>();

  formLogin!: FormGroup;
  userErrorText: string = "";
  passwordErrorText: string = "";
  isComponentAlive = true;

  constructor(
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.formLogin = this.initFormLogin();
  }

  initFormLogin(): FormGroup {
    return this.fb.group({
      user: ["", [Validators.required]],
      password: ["", [Validators.required]]
    });
  }

  // isRequired(control: string) {
  //   return this.formLogin.get(control)?.hasError("required");
  // }

  // userError() {
  //   if (this.isRequired("user")) {
  //     this.userErrorText = "Campo obligatorio";
  //   } else {
  //     this.userErrorText = "";
  //   }
  // }

  // passwordError() {
  //   if (this.isRequired("password")) {
  //     this.passwordErrorText = "Campo obligatorio";
  //   } else {
  //     this.passwordErrorText = "";
  //   }
  // }


  onSubmit(): void {
    if (this.formLogin.valid) {
      this.isValidLogin.emit(this.formLogin.value);
    } else {
      this.checkErrors();
    }
  }

  checkErrors() {
    // this.userError();
    // this.passwordError();
  }

  ngOnDestroy() {
    this.isComponentAlive = false;
  }

}
