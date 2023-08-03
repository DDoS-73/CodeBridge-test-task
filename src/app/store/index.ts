import { Features } from './features';
import { articlesReducer } from './articles.reducer';
import { ArticlesEffects } from './articles.effects';

export const rootReducer = {
  [Features.Articles]: articlesReducer
};

export const rootEffects = [ArticlesEffects];
