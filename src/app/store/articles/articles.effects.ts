import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ArticleService } from '../../shared/service/article.service';
import { loadArticles, successLoadArticles } from './articles.actions';
import { catchError, EMPTY, exhaustMap, map } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class ArticlesEffects {
  loadArticles$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadArticles),
      exhaustMap(({searchText}) => this.fetchArticles(searchText))
    )
  );

  private fetchArticles(searchText: string) {
    searchText = searchText.trim().split(' ').join(',');
    const params = {
      summary_contains_one: searchText,
      title_contains_one: searchText
    };
    return this.articleService.getArticles(params).pipe(
      map(({results}) => successLoadArticles({articles: results})),
      catchError(() => EMPTY)
    );
  }

  constructor(private actions$: Actions, private articleService: ArticleService) {
  }
}
