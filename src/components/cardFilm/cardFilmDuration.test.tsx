/* eslint-disable @typescript-eslint/no-explicit-any */
import { act, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { renderWithProviders } from '../../utils/test-utils';
import CardFilmDuration from './cardFilmDuration';
import { textContent } from '../../mockData/mockTest';
import 'whatwg-fetch';

let windowFetchSpy: any;
beforeEach(() => {
  //spyon read only window fetch
  windowFetchSpy = jest.spyOn(window, 'fetch');
});

afterEach(() => {
  // store back the original implementation of window fetch
  // windowFetchSpy = jest.mockRestore;
});

it('text in component should be show', () => {
  windowFetchSpy.mockResolvedValueOnce({
    ok: true,
    json: async () => ({ success: true }),
  });
  // jest.spyOn(Storage.prototype, 'getItem');
  // localStorage.getItem = jest.fn();
  act(() => {
    renderWithProviders(<CardFilmDuration>{textContent}</CardFilmDuration>);
  });

  expect(screen.getByText(textContent)).toBeInTheDocument();
});
