import { Selector, createSelector } from 'reselect';
import { RootState } from './../../store';
import { UserStateType } from './userSlice';

const selectUserReducer: Selector<RootState, UserStateType> = (state) =>
  state.user;

export const selectCurrentUser = createSelector(
  selectUserReducer,
  (user) => user.currentUser
);
