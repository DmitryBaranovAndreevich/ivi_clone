/* eslint-disable @typescript-eslint/no-explicit-any */
import { act, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { renderWithProviders } from '../../utils/test-utils';
import CardFilmDuration from './cardFilmDuration';
import { textContent } from '../../mockData/mockTest';
import 'whatwg-fetch';

let windowFetchSpy: any;
beforeEach(() => {
  windowFetchSpy = jest.spyOn(window, 'fetch');
});

it('text in component should be show', () => {
  windowFetchSpy.mockResolvedValueOnce({
    ok: true,
    json: async () => ({ success: true }),
  });
  act(() => {
    renderWithProviders(<CardFilmDuration>{textContent}</CardFilmDuration>);
  });

  expect(screen.getByText(textContent)).toBeInTheDocument();
});
