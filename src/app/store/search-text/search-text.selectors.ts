import { createFeatureSelector } from '@ngrx/store';
import { Features } from '../features';

export const selectSearchText = createFeatureSelector<string>(Features.SearchText);
