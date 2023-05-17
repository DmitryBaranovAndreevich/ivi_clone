import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type TSearchInitialState = {
  searchMain: string;
};

const searchInitialState: TSearchInitialState = {
  searchMain: '',
};

export const searchSlice = createSlice({
  name: 'search',
  initialState: searchInitialState,
  reducers: {
    setSearchMain(state, action: PayloadAction<{ searchMean: string }>) {
      state.searchMain = action.payload.searchMean;
    },
  },
});

export default searchSlice.reducer;
