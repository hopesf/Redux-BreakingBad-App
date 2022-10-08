import { configureStore } from '@reduxjs/toolkit';
import charactersSlice from './charactersSlice/charactersSlice';
import quotesSlice from './quotesSlice/quotesSlice';

export const store = configureStore({
  reducer: {
    characters: charactersSlice,
    quotes: quotesSlice,
  },
});
