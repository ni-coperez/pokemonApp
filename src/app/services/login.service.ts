import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient, private router: Router) { }


  logIn(username: string, password: string) {
    return this.http.post<any>('http://localhost:4200/login', { username, password }).pipe(
      tap(res => {
        //debugger;
        if (res) {
          for (let i = 0; i < res.length; i++) {
            if (res[i].email == username && res[i].password == password) {
              alert('Inicio de sesion correcto');
              this.router.navigate(['pokemon', 4]);
            } else {
              alert('Inicio de sesion incorrecto');
            }
          }
        } else {
          alert('No se han recogido los usuarios del interceptor');
        }
      }),
      catchError((error) => {
        alert('Ocurrio un error durante la autenticacion');
        console.log('Error:', error);
        throw error;
      })
    ).subscribe();
  }



}
