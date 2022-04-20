import { createSlice } from '@reduxjs/toolkit';
import { UserData } from './../../../utils/firebase-utils';

export interface IUserState {
  currentUser: UserData | null;
}

const initialState: IUserState = {
  currentUser: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload;
    },
  },
});

export const { setCurrentUser } = userSlice.actions;

export default userSlice.reducer;
