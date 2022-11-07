import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { User } from '../user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });
  user: User = new User;
  public loginInvalid: boolean = false;

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router) { }

  ngOnInit(): void { }

  loginUser() {
    if (this.loginForm.invalid) {
      return;
    }

    const val = this.loginForm.value;
    this.user.username = val.username!;
    this.user.password = val.password!;

    this.authenticationService.signIn(this.user).subscribe((response => {
      console.log(response);
      if (response.isValid) {
        localStorage.setItem('access_token', response.token);
        this.router.navigate(['Dashboard'])
      }
      else {
        this.loginInvalid = true;
      }
    }));

  }

}
