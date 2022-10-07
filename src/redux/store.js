import { configureStore } from '@reduxjs/toolkit';
import charactersSlice from './charactersSlice/charactersSlice';

export const store = configureStore({
  reducer: {
    characters: charactersSlice,
  },
});
