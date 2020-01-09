import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from './../../core/index.core';
import {CommonService} from './../../shared/index.shared';
import{Router} from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public isError = <boolean>false  
  form: any;
  isFormValid: boolean;
  request: { username: any; password: any; };

  emailRegEx=/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/

  constructor(private fb: FormBuilder, 
              private authService: AuthService,
              private commonService:CommonService,
              private router:Router){
    this.form = this.fb.group({
      'email': ['', [Validators.required,Validators.pattern(this.emailRegEx)]],
      'password': ['', [Validators.required,Validators.minLength(4)]],
    })
  }
  get email() { return this.form.get('email'); }
  get password(){return this.form.get('password')}


  onSubmit() {
    if (this.form.invalid) {
      this.isFormValid = false;
      this.form.get('email').markAsTouched();
      this.form.get('password').markAsTouched();
      return;
    }
    else {
      this.request = {
        "username": this.form.value.email,
        "password": this.form.value.password
      }

      this.isFormValid = true;
        this.authService.login(
        this.request, 
          res => {
            if (res.success) {

              localStorage.setItem('token',res.token.access_token);             
              this.commonService.gotoPage('dashboard');
              this.commonService.showMessage(res.message);
            }
          
            else{
              this.commonService.showError(res.message);
            }
          },
          err => {
            this.isError = true;
           this.commonService.showError(err);
          }
        );
    }
  }  
  ngOnInit() {
  }
}
