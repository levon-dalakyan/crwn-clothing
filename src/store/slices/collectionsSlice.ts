import { createSlice } from '@reduxjs/toolkit';

export interface CollectionType {
  id: number;
  title: string;
  imageUrl: string;
  large?: string | undefined;
  linkUrl: string;
}

interface CollectionsStateType {
  collections: CollectionType[];
}

const initialState: CollectionsStateType = {
  collections: [],
};

export const collectionsSlice = createSlice({
  name: 'collections',
  initialState,
  reducers: {
    setCollections: (state, action) => {
      state.collections = action.payload;
    },
  },
});

export const { setCollections } = collectionsSlice.actions;

export default collectionsSlice.reducer;
