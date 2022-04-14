import { Selector, createSelector } from 'reselect';
import { RootState } from './../../store';
import { ICategoriesState } from './categoriesSlice';

const selectCategoriesReducer: Selector<RootState, ICategoriesState> = (
  state
) => state.categories;

export const selectCategories = createSelector(
  selectCategoriesReducer,
  (categories) => categories.categories
);

export const selectCategoriesStatus = createSelector(
  selectCategoriesReducer,
  (categories) => categories.status
);

export const selectCategoriesError = createSelector(
  selectCategoriesReducer,
  (categories) => categories.error
);
