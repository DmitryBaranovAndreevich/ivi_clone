import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type TMoviesFilterInitialState = {
  // kindOfFilter:
  choosenGenres: Array<string>;
  choosenCountries: Array<string>;
  choosenYears: Array<string>;
};

const moviesFilterInitialState: TMoviesFilterInitialState = {
  // kindOfFilter:
  choosenGenres: [],
  choosenCountries: [],
  choosenYears: [],
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
    // setActors(state, action: PayloadAction<{ years: Array<string> }>) {
    //   state.choosenYears = action.payload.years;
    // },
    // setDirectors(state, action: PayloadAction<{ years: Array<string> }>) {
    //   state.choosenYears = action.payload.years;
    // },
  },
});

export default moviesFilter.reducer;
