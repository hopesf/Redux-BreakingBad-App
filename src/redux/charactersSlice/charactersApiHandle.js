import { popularCharactersAsync } from './charactersApiCalls';

export const extraReducers = {
  [popularCharactersAsync.pending]: (state, action) => {},
  [popularCharactersAsync.fulfilled]: (state, action) => {
    state.popularCharacters = action.payload;
  },
  [popularCharactersAsync.rejected]: (state, action) => {},
};
