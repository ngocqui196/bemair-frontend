import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {User} from '../model/User';
import {Observable} from 'rxjs';
const URL = `${environment.apiUrl}`;
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }

  register(user: User): Observable<User> {
    return this.httpClient.post<User>(URL + '/security/register', user);
  }
  login(user: User): Observable<any> {
    return this.httpClient.post<any>(URL + '/security/login', user)
  }
}
