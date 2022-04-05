import { combineReducers } from 'redux';
import userReducer from './userSlice';
import cartReducer from './cartSlice';
import categoriesReducer from './categoriesSlice';
import collectionsReducer from './collectionsSlice';

export default combineReducers({
  user: userReducer,
  cart: cartReducer,
  categories: categoriesReducer,
  collections: collectionsReducer,
});
