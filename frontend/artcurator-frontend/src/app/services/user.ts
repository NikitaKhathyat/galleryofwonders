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

  register(user: any) {
    return this.http.post(`${this.baseUrl}/register`, user);
  }

  getUser(id: string) {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  updateUser(id: string, user: any) {
    return this.http.put(`${this.baseUrl}/${id}`, user);
  }

  // getBookmarks(id: string) {
  //   return this.http.get(`${this.baseUrl}/${id}/bookmarks`);
  // }

  getCollections(id: string) {
    return this.http.get(`${this.baseUrl}/${id}/collections`);
  }

  getUserWonders(id: string) {
    return this.http.get(`${this.baseUrl}/${id}/wonders`);
  }
  

  // SAVE BOOKMARK
  saveBookmark(wonderId: string) {
    return this.http.post(
      `${this.baseUrl}/bookmarks/${wonderId}`,
      {}
    );
  }

  // REMOVE BOOKMARK
  removeBookmark(wonderId: string) {
    return this.http.delete(
      `${this.baseUrl}/bookmarks/${wonderId}`
    );
  }

  // GET MY BOOKMARKS (JWT-based)
  getMyBookmarks() {
    return this.http.get(`${this.baseUrl}/bookmarks`);
  }


}
