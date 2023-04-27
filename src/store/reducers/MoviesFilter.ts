import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type TMoviesFilterInitialState = {
  // kindOfFilter:
  choosenGenres: Array<string>;
  choosenCountries: Array<string>;
  choosenYears: Array<string>;
  choosenRate: number;
  choosenCountReview: number;
};

const moviesFilterInitialState: TMoviesFilterInitialState = {
  // kindOfFilter:
  choosenGenres: [],
  choosenCountries: [],
  choosenYears: [],
  choosenRate: 0,
  choosenCountReview: 0,
};

export const moviesFilter = createSlice({
  name: 'moviesFilter',
  initialState: moviesFilterInitialState,
  reducers: {
    setGenres(state, action: PayloadAction<{ genres: Array<string> }>) {
      state.choosenGenres = action.payload.genres;
    },
    setCountries(state, action: PayloadAction<{ countries: Array<string> }>) {
      state.choosenCountries = action.payload.countries;
    },
    setYears(state, action: PayloadAction<{ years: Array<string> }>) {
      state.choosenYears = action.payload.years;
    },
    setRate(state, action: PayloadAction<{ rate: number }>) {
      state.choosenRate = action.payload.rate;
    },
    setCountReview(state, action: PayloadAction<{ countReview: number }>) {
      state.choosenCountReview = action.payload.countReview;
    },
    resetAllValue(state) {
      debugger;
      state.choosenGenres = [];
      state.choosenCountries = [];
      state.choosenYears = [];
      state.choosenRate = 0;
      state.choosenCountReview = 0;
    },
  },
});

export default moviesFilter.reducer;
