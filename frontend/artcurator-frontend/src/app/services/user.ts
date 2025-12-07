import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService{
  private baseUrl = 'http://localhost:8080/api/users';

  constructor(private http: HttpClient) {}

  create(user: User): Observable<User> {
    return this.http.post<User>(this.baseUrl, user);
  }

  getById(id: string): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}/${id}`);
  }

}
