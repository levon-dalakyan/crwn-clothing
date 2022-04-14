import { Selector, createSelector } from 'reselect';
import { RootState } from './../../store';
import { IUserState } from './userSlice';

const selectUserReducer: Selector<RootState, IUserState> = (state) =>
  state.user;

export const selectCurrentUser = createSelector(
  selectUserReducer,
  (user) => user.currentUser
);
