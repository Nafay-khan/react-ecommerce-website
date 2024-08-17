import { combineReducers } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import themeReducer from './themeSlice';

const rootReducer = combineReducers({
  cartStore: cartReducer,
  themeStore: themeReducer,
});

export default rootReducer;