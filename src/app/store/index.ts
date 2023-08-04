import { Features } from './features';
import { articlesReducer } from './articles/articles.reducer';
import { ArticlesEffects } from './articles/articles.effects';
import { searchTextReducer } from './search-text/search-text.reducer';

export const rootReducer = {
  [Features.Articles]: articlesReducer,
  [Features.SearchText]: searchTextReducer
};

export const rootEffects = [ArticlesEffects];
