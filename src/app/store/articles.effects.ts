import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ArticleService } from '../shared/service/article.service';
import { loadArticles, successLoadArticles } from './articles.actions';
import { catchError, EMPTY, exhaustMap, map } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class ArticlesEffects {
  loadArticles$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadArticles),
      exhaustMap(() =>
        this.articleService.getArticles().pipe(
          map(({results}) => successLoadArticles({articles: results})),
          catchError(() => EMPTY)
        )
      )
    )
  );

  constructor(private actions$: Actions, private articleService: ArticleService) {
  }
}
