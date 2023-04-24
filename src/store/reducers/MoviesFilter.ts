import { createSlice } from '@reduxjs/toolkit';

type TMoviesFilterInitialState = {
  genre: Array<string>;
  country: Array<string>;
  years: Array<string>;
};

const moviesFilterInitialState: TMoviesFilterInitialState = {
  genre: [],
  country: [],
  years: [],
};

export const moviesFilter = createSlice({
  name: 'moviesFilter',
  initialState: moviesFilterInitialState,
  reducers: {},
});

export default moviesFilter.reducer;
