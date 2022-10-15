import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
//import { AuthService } from '../auth.service';


@Component({  
  selector: 'app-login',  
  templateUrl: './login.component.html',  
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {  
  form: UntypedFormGroup;  
  public loginInvalid: boolean;  
  private formSubmitAttempt: boolean;  
  private returnUrl: string;
  constructor(
    private fb: UntypedFormBuilder,
    private route: ActivatedRoute,
    private router: Router//,
    //private authService: AuthService
  ) {    
  } 
  
  async ngOnInit() {    
    this.returnUrl = '/Schnitt';
    this.form = this.fb.group({      
      username: ['', Validators.email],      
      password: ['', Validators.required]
    });
    //if (await this.authService.checkAuthenticated()) {      
    // await this.router.navigate([this.returnUrl]);      
    //}
    
  }
  async onSubmit() {    
    this.loginInvalid = false;    
    this.formSubmitAttempt = false;    
    if (this.form.valid) {      
      try {        
        //const username = this.form.get('username').value;        
        //const password = this.form.get('password').value;        
        //await this.authService.login(username, password);
        this.router.navigate([this.returnUrl]);
        
      } catch (err) {        
        this.loginInvalid = true;        
      }      
    } else {      
      this.formSubmitAttempt = true;      
    }
    
  }
  
}