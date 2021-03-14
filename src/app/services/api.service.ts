import Post from 'src/app/posts/post.model';
import Comment from 'src/app/comments/comment.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiURL: string = 'https://jsonplaceholder.typicode.com/';
  constructor(private httpclient: HttpClient) { }

  getPosts(): Observable<Post[]> {
    return this.httpclient.get<Post[]>(this.apiURL + 'posts');
  }
  getComments(postId: number): Observable<Comment[]> {
    return this.httpclient.get<Comment[]>(this.apiURL + 'posts/' + postId + '/comments');
  }
  getPost(postId: number): Observable<Post> {
    return this.httpclient.get<Post>(this.apiURL + 'posts/' + postId);
  }

  postComments(payload: Comment): Observable<Comment> {
    return this.httpclient.post<Comment>(this.apiURL + 'posts/' + payload.postId + '/comments', JSON.stringify(payload), {
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
