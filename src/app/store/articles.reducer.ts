import { Article } from '../shared/models/Article.model';
import { createReducer, on } from '@ngrx/store';
import { successLoadArticles } from './articles.actions';

export type ArticleState = Article[];

export const initialState: ArticleState = [];

export const articlesReducer = createReducer(
  initialState,
  on(successLoadArticles, (state, {articles}) => articles)
);
