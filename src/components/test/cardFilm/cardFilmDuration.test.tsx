import { screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { renderWithProviders } from '../../../utils/test-utils';
import CardFilmDuration from '../../cardFilm/cardFilmDuration';
import { textContent } from '../../../mockData/mockTest';

test('text in component should be show', () => {
  renderWithProviders(<CardFilmDuration>{textContent}</CardFilmDuration>);

  expect(screen.getByText(textContent)).toBeInTheDocument();
});
