import { combineReducers } from 'redux';
import userReducer from './user/userSlice';
import cartReducer from './cart/cartSlice';
import categoriesReducer from './categories/categoriesSlice';
import collectionsReducer from './collections/collectionsSlice';

export default combineReducers({
  user: userReducer,
  cart: cartReducer,
  categories: categoriesReducer,
  collections: collectionsReducer,
});
