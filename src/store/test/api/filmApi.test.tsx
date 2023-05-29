import type { ReactNode } from 'react';
import { renderHook, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import fetchMock from 'jest-fetch-mock';
import { useGetOneFilmQuery } from '../../api/filmApi';
import { store } from '../../mainStore';

function wrapper({ children }: { children: ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}

beforeEach(() => {
  fetchMock.resetMocks();
});

describe('useGetOneFilmQuery', () => {
  // const endpointName = 'getOneFilm';
  const filmId = 1;
  const data = {};

  beforeEach(() => {
    fetchMock.mockOnceIf(`http://localhost:3000/api/films/${filmId}}`, () =>
      Promise.resolve({
        status: 200,
        body: JSON.stringify({ data }),
      })
    );
  });

  it('renders hook', async () => {
    // const { result } = renderHook(() => useGetOneFilmQuery({ id: String(filmId) }), {
    //   wrapper,
    // });
    // expect(result.current).toMatchObject({
    //   status: 'pending',
    //   endpointName,
    //   isLoading: true,
    //   isSuccess: false,
    //   isError: false,
    //   isFetching: true,
    // });
    // await waitFor(() => expect(result.current.isSuccess).toBe(true));
    // expect(fetchMock).toBeCalledTimes(1);
    // expect(result.current).toMatchObject({
    //   status: 'fulfilled',
    //   endpointName,
    //   data,
    //   isLoading: false,
    //   isSuccess: true,
    //   isError: false,
    //   currentData: data,
    //   isFetching: false,
    // });
  });
});
