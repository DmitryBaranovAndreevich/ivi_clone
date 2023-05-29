import MoviesSort, {
  moviesSort,
  moviesSortInitialState,
  TKindSort,
  TMoviesSortInitialState,
} from '../reducers/MoviesSort';

const mockSort: TKindSort = {
  title: 'По алфавиту',
  enTitle: 'By the number of ratings',
  href: 'name',
};

describe('movies sort reducer', () => {
  const state: TMoviesSortInitialState = moviesSortInitialState;
  it('choosenSort should be set correct', async () => {
    const initialState: TMoviesSortInitialState = { ...state, choosenSort: state.choosenSort };
    const action = moviesSort.actions.setSort({ sortValue: mockSort });
    const expectedState: TMoviesSortInitialState = { ...state, choosenSort: mockSort };
    expect(MoviesSort(initialState, action)).toEqual(expectedState);
  });
  it('choosenSort should be set correct', async () => {
    const initialState: TMoviesSortInitialState = {
      ...state,
      maxRatingCountOfFilm: state.maxRatingCountOfFilm,
    };
    const action = moviesSort.actions.setMaxRatingCountOfFilm({ ratingCount: 2 });
    const expectedState: TMoviesSortInitialState = { ...state, maxRatingCountOfFilm: 2 };
    expect(MoviesSort(initialState, action)).toEqual(expectedState);
  });
});
