import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './themeSlice';
import demoSlice from './demoSlice'
const store = configureStore({
  reducer: {
    theme: themeReducer,
    demo:demoSlice,
  },
});

export default store;
