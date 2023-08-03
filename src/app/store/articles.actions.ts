import { createAction, props } from '@ngrx/store';
import { Article } from '../shared/models/Article.model';

export const loadArticles = createAction(
  '[Home Page] Load Articles'
);

export const successLoadArticles = createAction(
  '[Articles API] Articles Loaded Success',
  props<{ articles: Article[] }>()
);
