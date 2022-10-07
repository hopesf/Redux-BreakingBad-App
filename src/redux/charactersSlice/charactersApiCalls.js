import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const baseUrl = 'https://www.breakingbadapi.com';

export const popularCharactersAsync = createAsyncThunk('characters/popularCharacters', async () => {
  const { data } = await axios.get(baseUrl + '/api/characters?limit=4&offset=0');
  return data;
});
