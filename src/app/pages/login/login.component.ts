import { Component } from '@angular/core';
import { FormBuilder, FormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/auth/login.service';
import { LoginRequest } from 'src/app/services/auth/loginRequest';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  error: string = '';
  loginForm = this.formBuilder.group({
      email: ['47265268',[Validators.required]],
      password: ['', Validators.required]
  });
  constructor(private formBuilder: FormBuilder, 
    private router:Router,
    private loginService: LoginService) {}

  ngOnInit(): void {
  }
  get email(){
    return this.loginForm.get('email');
  }
  get password(){
    return this.loginForm.get('password');
  }

  login(){
    if(this.loginForm.valid){
      this.loginService.login(this.loginForm.value as LoginRequest).subscribe({
        next: response => {
          console.log(response.result);
          var data = (response);
          console.log(data.result);
          if(data.success == true){
            this.router.navigate(['/inicio']);
          }else{
            this.error = data.message;
          }
        },
        error: error => {
          this.error = error;
          console.log(error);
        },
        complete: () => {
          console.log("complete");
        }
      });
      this.loginForm.reset();
    }else{
      this.loginForm.markAllAsTouched();
      alert("Formulario no valido");
    }
  }
    
}
