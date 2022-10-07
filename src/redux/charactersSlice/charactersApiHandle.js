import { popularCharactersAsync } from './charactersApiCalls';

export const extraReducers = {
  [popularCharactersAsync.pending]: (state, action) => {
    state.popularCharacters.status = 'pending';
  },
  [popularCharactersAsync.fulfilled]: (state, action) => {
    state.popularCharacters.status = 'fullfilled';
    state.popularCharacters.items = action.payload;
  },
  [popularCharactersAsync.rejected]: (state, action) => {
    state.popularCharacters.status = 'rejected';
  },
};
