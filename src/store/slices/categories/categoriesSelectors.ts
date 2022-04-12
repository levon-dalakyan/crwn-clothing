import { Selector, createSelector } from 'reselect';
import { RootState } from './../../store';
import { CategoriesStateType } from './categoriesSlice';

const selectCategoriesReducer: Selector<RootState, CategoriesStateType> = (
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
