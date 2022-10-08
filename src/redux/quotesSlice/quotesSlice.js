import { createSlice } from '@reduxjs/toolkit';
import { extraReducers } from './quotesApiHandle';

const initialState = {
  allQuotes: {
    items: [],
    status: 'idle',
  },
};

const quotesSlice = createSlice({
  name: 'quotes',
  initialState,
  reducers: {},
  extraReducers,
});

export default quotesSlice.reducer;
