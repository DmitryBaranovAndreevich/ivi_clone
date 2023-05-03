import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type TTitleKindSort =
  | 'По количеству оценок'
  | 'По рейтингу'
  | 'По дате выхода'
  | 'По алфавиту';

export type TKindSort = {
  title: TTitleKindSort;
  href: string;
};

type TMoviesSortInitialState = {
  kindsSort: Array<TKindSort>;
  choosenSort: TKindSort;
  searchUrl: null | string;
};

const moviesSortInitialState: TMoviesSortInitialState = {
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
  searchUrl: null,
};

export const moviesSort = createSlice({
  name: 'moviesSort',
  initialState: moviesSortInitialState,
  reducers: {
    setSort(state, action: PayloadAction<{ sortValue: TKindSort }>) {
      state.choosenSort = action.payload.sortValue;
    },
    setSearchUrl(state, action: PayloadAction<{ url: string }>) {
      state.searchUrl = action.payload.url;
    },
  },
});

export default moviesSort.reducer;
