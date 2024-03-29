import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getCollectionsAndDocuments } from '../../../utils/firebase-utils';

export interface ICollection {
  id: number;
  title: string;
  imageUrl: string;
  large?: string | undefined;
  linkUrl: string;
}

export interface ICollectionsMap {
  [key: string]: ICollection;
}

export interface ICollectionsState {
  collections: ICollectionsMap;
  status: string;
  error: string | undefined;
}

const initialState: ICollectionsState = {
  collections: {},
  status: 'idle',
  error: '',
};

export const fetchCollections = createAsyncThunk(
  'collections/fetchCollections',
  async () => getCollectionsAndDocuments()
);

export const collectionsSlice = createSlice({
  name: 'collections',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchCollections.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCollections.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.collections = action.payload;
      })
      .addCase(fetchCollections.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default collectionsSlice.reducer;
