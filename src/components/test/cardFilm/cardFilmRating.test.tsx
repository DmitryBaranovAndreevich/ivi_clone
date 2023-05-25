import { screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { renderWithProviders } from '../../../utils/test-utils';
import CardFilmRating from '../../cardFilm/cardFilmRating';
import { ratingContent } from '../../../mockData/mockTest';

test('rateInteger shoul be equal 8, if rating equal 8.9', () => {
  renderWithProviders(<CardFilmRating rating={ratingContent} />);
  expect(screen.getByTestId('rateInteger').textContent).toBe('8');
});

test('rateInteger shoul be equal 9, if rating equal 8.9', () => {
  renderWithProviders(<CardFilmRating rating={ratingContent} />);
  expect(screen.getByTestId('rateFraction').textContent).toBe(',9');
});
