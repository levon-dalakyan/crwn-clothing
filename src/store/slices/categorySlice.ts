import { createSlice } from '@reduxjs/toolkit';

export interface ProductType {
  id: string;
  imageUrl: string;
  name: string;
  price: number;
}

export interface CategoriesType {
  hats: ProductType[];
  jackets: ProductType[];
  man: ProductType[];
  sneakers: ProductType[];
  women: ProductType[];
}

interface CategoryStateType {
  categories: CategoriesType;
}

const initialState: CategoryStateType = {
  categories: {
    hats: [],
    jackets: [],
    man: [],
    sneakers: [],
    women: [],
  },
};

export const categorySlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    setCategories: (state, action) => {
      state.categories = action.payload;
    },
  },
});

export const { setCategories } = categorySlice.actions;

export default categorySlice.reducer;
