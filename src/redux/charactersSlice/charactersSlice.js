import { createSlice } from '@reduxjs/toolkit';
import { reducers } from './charactersReducers';
import { extraReducers } from './charactersApiHandle';

const initialState = {
  allCharacters: [],
  popularCharacters: {
    items: [],
    status: 'idle',
  },
};

const charactersSlice = createSlice({
  name: 'characters',
  initialState,
  reducers,
  extraReducers,
});

export default charactersSlice.reducer;
