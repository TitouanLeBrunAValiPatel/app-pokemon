import { Injectable } from '@angular/core';
import { delay, Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn: boolean = true;
  redirectUrl: string;


  // METHODES 

  login(name: string, password:string): Observable<boolean>{
    const isLoggedIn = (name == 'pikachu' && password == 'pikachu'); // return true si c'est vrai 

    return of(isLoggedIn).pipe(
    delay(1000),
    tap(isLoggedIn => this.isLoggedIn = isLoggedIn));

  }

  logout(){
    this.isLoggedIn = false;
  }
}
