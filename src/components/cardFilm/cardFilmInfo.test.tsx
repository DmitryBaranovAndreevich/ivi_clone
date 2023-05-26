import { act, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { renderWithProviders } from '../../utils/test-utils';
import CardFilmInfo from './cardFilmInfo';
import { countryContent, genreContent, yearContent } from '../../mockData/mockTest';

test('content about film info should be show right', () => {
  act(() => {
    renderWithProviders(
      <CardFilmInfo year={yearContent} country={countryContent} genre={genreContent} />
    );
  });

  expect(
    screen.getByText(`${yearContent}, ${countryContent}, ${genreContent}`)
  ).toBeInTheDocument();
});
