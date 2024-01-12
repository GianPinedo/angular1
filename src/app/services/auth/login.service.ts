import { Injectable } from '@angular/core';
import { LoginRequest } from './loginRequest';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, throwError,BehaviorSubject, tap } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  currentUserLoginOn: BehaviorSubject<boolean> =  new BehaviorSubject<boolean>(false);
  currentUserData: BehaviorSubject<User> =  new BehaviorSubject<User>({id:0,}
  );

  constructor(private http: HttpClient) { }

  login(credentials: LoginRequest):Observable<any>{
    var data = {
      "usuario": credentials.email,
      "password": credentials.password
    }
    return this.http.post('https://dsp.pronatel.gob.pe/usuario/login_bd', data,
     {responseType: 'json'}).pipe(
        tap((response: any) => {
          if(response.success == true){
            localStorage.setItem('token', response.result);
            this.currentUserLoginOn.next(true);
            this.currentUserData.next(response.data);
          }
        }),
        catchError(this.handleError)
     );
  }

  private handleError(error: HttpErrorResponse){
    if(error.status == 0){
      console.log('An error occurred:', error.error);
    }else{
      console.log(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(()=>{console.log("Algo salio mal")});

  }

  logout(){
    localStorage.removeItem('token');
    this.currentUserLoginOn.next(false);
    this.currentUserData.next({id:0});
  }

  get UserData():Observable<User>{
    return this.currentUserData.asObservable();
  }
  get isUserLoggedIn():Observable<boolean>{
    return this.currentUserLoginOn.asObservable();
  }
}
