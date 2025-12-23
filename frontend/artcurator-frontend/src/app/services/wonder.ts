import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Wonder } from '../models/wonder.model';
import { Comment } from '../models/comment.model';

@Injectable({
  providedIn: 'root'
})
export class WonderService {

  private baseUrl = 'http://localhost:8080/api/wonders';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Wonder[]> {
    return this.http.get<Wonder[]>(this.baseUrl);
  }

   createWonder(wonder: any) {
    return this.http.post(this.baseUrl, wonder);
  }

  addComment(wonderId: string, comment: Comment): Observable<Comment> {
    return this.http.post<Comment>(`${this.baseUrl}/${wonderId}/comments`, comment);
  }

  like(wonderId: string, userId: string): Observable<Wonder> {
    return this.http.post<Wonder>(`${this.baseUrl}/${wonderId}/like?userId=${userId}`, {});
  }
}
