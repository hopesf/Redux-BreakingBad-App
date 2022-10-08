import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const baseUrl = 'https://www.breakingbadapi.com';

export const allQuotesAsync = createAsyncThunk('quotes/allQuotes', async () => {
  const { data } = await axios.get(baseUrl + '/api/quotes');
  return data;
});
