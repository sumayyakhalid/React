import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  theme: 'light', // Default theme is light
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      // Toggle between light and dark theme
       state.theme = state.theme === 'light' ? 'dark' : 'light';
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
