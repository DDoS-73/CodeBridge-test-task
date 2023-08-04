import { createReducer, on } from '@ngrx/store';
import { updateText } from './search-text.actions';

const initialState = '';

export const searchTextReducer = createReducer(
  initialState,
  on(updateText, (state, {searchText}) => searchText)
);
