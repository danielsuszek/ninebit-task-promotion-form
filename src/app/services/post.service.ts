import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from 'src/assets/data/posts';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private postsUrl = 'api/posts';  
  
  constructor(private httpClient: HttpClient) { }

  // getHeroes(): Observable<Hero[]> {
  //   return this.http.get<Hero[]>(this.heroesUrl)
  // }
  getPosts(): Observable<Post[]> {
    return this.httpClient.get<Post[]>(this.postsUrl)
  }
}
