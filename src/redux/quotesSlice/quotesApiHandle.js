import { allQuotesAsync } from './quotesApiCalls';

export const extraReducers = {
  /* all Quotes */

  [allQuotesAsync.pending]: (state) => {
    state.allQuotes.status = 'pending';
  },
  [allQuotesAsync.fulfilled]: (state, action) => {
    state.allQuotes.status = 'fullfilled';
    state.allQuotes.items = action.payload;
  },
  [allQuotesAsync.rejected]: (state) => {
    state.allQuotes.status = 'rejected';
  },
};
