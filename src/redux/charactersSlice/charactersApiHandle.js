import { allCharactersAsync, popularCharactersAsync } from './charactersApiCalls';

export const extraReducers = {
  [popularCharactersAsync.pending]: (state) => {
    state.popularCharacters.status = 'pending';
  },
  [popularCharactersAsync.fulfilled]: (state, action) => {
    state.popularCharacters.status = 'fullfilled';
    state.popularCharacters.items = action.payload;
  },
  [popularCharactersAsync.rejected]: (state) => {
    state.popularCharacters.status = 'rejected';
  },

  //all characters

  [allCharactersAsync.pending]: (state) => {
    state.allCharacters.status = 'pending';
  },
  [allCharactersAsync.fulfilled]: (state, action) => {
    state.allCharacters.status = 'fullfilled';
    state.allCharacters.items = action.payload;
  },
  [allCharactersAsync.rejected]: (state) => {
    state.allCharacters.status = 'rejected';
  },
};
