import { act, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { renderWithProviders } from '../../utils/test-utils';
import CardFilmDuration from './cardFilmDuration';
import { countryContent, genreContent, mockFilmTest, textContent } from '../../mockData/mockTest';
import CardFilm from './cardFilm';

test('text in component should be show', () => {
  act(() => {
    renderWithProviders(
      <CardFilm
        filmId={mockFilmTest.id}
        image={mockFilmTest.poster}
        name={mockFilmTest.name}
        duration={mockFilmTest.duration}
        rating={mockFilmTest.rating}
      />
    );
  });
  fireEvent.mouseOver(screen.getByTestId('CardFilm_link'));

  expect(screen.getByTestId('CardFilm_information')).toBeVisible();
});
test('text in component should be show', () => {
  act(() => {
    renderWithProviders(
      <CardFilm
        filmId={mockFilmTest.id}
        image={mockFilmTest.poster}
        name={mockFilmTest.name}
        duration={mockFilmTest.duration}
        rating={mockFilmTest.rating}
      />
    );
  });
  fireEvent.mouseOut(screen.getByTestId('CardFilm_link'));

  expect(screen.getByText('Актеры')).not.toBeVisible();
});
