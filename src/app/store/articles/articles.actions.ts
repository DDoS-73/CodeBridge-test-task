import { createAction, props } from '@ngrx/store';
import { Article } from '../../shared/models/Article.model';

export const loadArticles = createAction(
  '[Home Page] Load Articles',
  props<{ searchText: string }>()
);

export const successLoadArticles = createAction(
  '[Articles API] Articles Loaded Success',
  props<{ articles: Article[] }>()
);
