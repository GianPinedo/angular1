import { Component } from '@angular/core';
import { LoginService } from 'src/app/services/auth/login.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  users: any[] = [
    { name: 'Usuario 1', email: 'usuario1@example.com', role: 'Rol 1' },
    { name: 'Usuario 2', email: 'usuario2@example.com', role: 'Rol 2' },
    { name: 'Usuario 3', email: 'usuario3@example.com', role: 'Rol 3' },
    { name: 'Usuario 4', email: 'usuario4@example.com', role: 'Rol 4' },
    { name: 'Usuario 5', email: 'usuario5@example.com', role: 'Rol 5' },
    { name: 'Usuario 6', email: 'usuario6@example.com', role: 'Rol 6' },
    { name: 'Usuario 7', email: 'usuario7@example.com', role: 'Rol 7' },
    { name: 'Usuario 8', email: 'usuario8@example.com', role: 'Rol 8' },
    { name: 'Usuario 9', email: 'usuario9@example.com', role: 'Rol 9' },
    { name: 'Usuario 10', email: 'usuario10@example.com', role: 'Rol 10' },
  ];
  userLoggedIn: boolean = false;

  constructor(private loginService: LoginService) { }
  ngOnInit() {
   this.loginService.isUserLoggedIn.subscribe({
      next: response => {
        this.userLoggedIn = response;
      }
    });
  }

}
