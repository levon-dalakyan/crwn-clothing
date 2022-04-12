import { createSlice } from '@reduxjs/toolkit';
import { User } from 'firebase/auth';

export interface UserStateType {
  currentUser: User | null;
}

const initialState: UserStateType = {
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
