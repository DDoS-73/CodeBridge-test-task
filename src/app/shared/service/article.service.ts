import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL } from '../const';
import { ArticlesResponse } from '../models/ArticleResponse.model';
import { Article } from '../models/Article.model';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http: HttpClient) { }

  getArticles() {
    return this.http.get<ArticlesResponse>(URL);
  }

  getArticleByID(id: string | number) {
    return this.http.get<Article>(`${URL}/${id}`)
  }
}
