import { createAction, props } from '@ngrx/store';

export const updateText = createAction(
  '[Home Page] Update Search Text',
  props<{ searchText: string }>()
);
