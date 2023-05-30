import SearchSlice, { searchSlice, TSearchInitialState } from '../reducers/SearchSlice';

describe('searchReducer', () => {
  const state: TSearchInitialState = {
    searchMain: '',
  };
  it('searchMain should be set correct', async () => {
    const initialState: TSearchInitialState = { ...state, searchMain: '' };
    const action = searchSlice.actions.setSearchMain({ searchMean: 'test' });
    const expectedState: TSearchInitialState = { ...state, searchMain: 'test' };
    expect(SearchSlice(initialState, action)).toEqual(expectedState);
  });
});
