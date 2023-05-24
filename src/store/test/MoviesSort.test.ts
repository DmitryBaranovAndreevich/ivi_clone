import MoviesSort, {
  moviesSort,
  moviesSortInitialState,
  TKindSort,
  TMoviesSortInitialState,
} from '../reducers/MoviesSort';

const mockSort: TKindSort = {
  title: 'По алфавиту',
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
});
