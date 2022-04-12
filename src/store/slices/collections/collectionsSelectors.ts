import { Selector, createSelector } from 'reselect';
import { RootState } from './../../store';
import { CollectionsStateType } from './collectionsSlice';

const selectCollectionsReducer: Selector<RootState, CollectionsStateType> = (
  state
) => state.collections;

export const selectCollections = createSelector(
  selectCollectionsReducer,
  (collections) => collections.collections
);

export const selectCollectionsStatus = createSelector(
  selectCollectionsReducer,
  (collections) => collections.status
);

export const selectCollectionsError = createSelector(
  selectCollectionsReducer,
  (collections) => collections.error
);
