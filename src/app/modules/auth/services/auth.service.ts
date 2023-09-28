import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environments } from 'src/environment/environment.prod';
import { AuthInterface } from '../interfaces/auth.interface';
import { BehaviorSubject, Observable, Subscription, of } from 'rxjs';
import { Router } from '@angular/router';
import { UserTokenInterface } from '../interfaces/user-token.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  private baseUrl = environments.baseUrl;
  private groupName = 'auth';
  
  private userLogged = new BehaviorSubject<UserTokenInterface|null>(null);
  public userLogged$ = this.userLogged.asObservable();
  
  constructor(private httpClient:HttpClient, private router:Router) { }

  login(body:AuthInterface) : Observable<UserTokenInterface> {
    const user =  this.httpClient.post<UserTokenInterface>(`${this.baseUrl}/${this.groupName}/signin`,body);
    return user;
  }

  setUserLogged(user:UserTokenInterface):void{
    localStorage.setItem('userLogged', JSON.stringify(user));
  }
  
  logout():void{
    this.router.navigate(['/auth/signin']);
    localStorage.removeItem('userLogged'); 
  }


}
