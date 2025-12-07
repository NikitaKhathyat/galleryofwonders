import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Comment } from '../models/comment.model';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  private baseUrl = 'http://localhost:8080/api/comments';

  constructor(private http: HttpClient) {}

  update(id: string, comment: Comment): Observable<Comment> {
    return this.http.put<Comment>(`${this.baseUrl}/${id}`, comment);
  }

  delete(id: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
