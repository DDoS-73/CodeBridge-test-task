import { ArticleState } from './articles.reducer';
import { createFeatureSelector } from '@ngrx/store';
import { Features } from './features';

export const selectArticles = createFeatureSelector<ArticleState>(Features.Articles);

