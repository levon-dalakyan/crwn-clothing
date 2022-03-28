import { combineReducers } from 'redux';
import userReducer from './userSlice';
import cartReducer from './cartSlice';
import categoryReducer from './categorySlice';

export default combineReducers({
  user: userReducer,
  cart: cartReducer,
  category: categoryReducer,
});
