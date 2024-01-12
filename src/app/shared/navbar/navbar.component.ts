import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/auth/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  userLoggedIn: boolean = false;

  constructor(private loginService: LoginService, private router: Router) {
      
   }
  ngOnInit() {
    this.loginService.isUserLoggedIn.subscribe({
      next: response => {
        this.userLoggedIn = response;
      }
    });
  }
  logout(){
    this.loginService.logout();
    this.router.navigate(['/login']);
  }

}
