import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getCategoriesAndDocuments } from '../../../utils/firebase-utils';

export interface IProduct {
  id: string;
  imageUrl: string;
  name: string;
  price: number;
}

export interface ICategories {
  hats: IProduct[];
  jackets: IProduct[];
  man: IProduct[];
  sneakers: IProduct[];
  women: IProduct[];
}

export interface ICategoriesState {
  categories: ICategories;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | undefined;
}

const initialState: ICategoriesState = {
  categories: {
    hats: [],
    jackets: [],
    man: [],
    sneakers: [],
    women: [],
  },
  status: 'idle',
  error: '',
};

export const fetchCategories = createAsyncThunk(
  'categories/fetchCategories',
  async () => getCategoriesAndDocuments()
);

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.categories = action.payload;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default categoriesSlice.reducer;
