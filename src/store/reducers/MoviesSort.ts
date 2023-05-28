import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type TTitleKindSort =
  | 'По количеству оценок'
  | 'По рейтингу'
  | 'По дате выхода'
  | 'По алфавиту';

export type THrefKindSort = 'mark' | 'rate' | 'year' | 'name';

export type TKindSort = {
  title: TTitleKindSort;
  href: string;
};

export type TMoviesSortInitialState = {
  kindsSort: Array<TKindSort>;
  choosenSort: TKindSort;
  maxRatingCountOfFilm: number;
};

export const moviesSortInitialState: TMoviesSortInitialState = {
  kindsSort: [
    {
      title: 'По количеству оценок',
      href: 'mark',
    },
    {
      title: 'По рейтингу',
      href: 'rate',
    },
    {
      title: 'По дате выхода',
      href: 'year',
    },
    {
      title: 'По алфавиту',
      href: 'name',
    },
  ],
  choosenSort: {
    title: 'По количеству оценок',
    href: 'mark',
  },
  maxRatingCountOfFilm: 0,
};

export const moviesSort = createSlice({
  name: 'moviesSort',
  initialState: moviesSortInitialState,
  reducers: {
    setSort(state, action: PayloadAction<{ sortValue: TKindSort }>) {
      state.choosenSort = action.payload.sortValue;
    },
    setMaxRatingCountOfFilm(state, action: PayloadAction<{ ratingCount: number }>) {
      state.maxRatingCountOfFilm = action.payload.ratingCount;
    },
  },
});

export default moviesSort.reducer;
