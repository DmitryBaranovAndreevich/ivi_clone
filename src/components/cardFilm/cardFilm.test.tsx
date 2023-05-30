import { act, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { renderWithProviders } from '../../utils/test-utils';
import { mockFilmTest } from '../../mockData/mockTest';
import CardFilm from './cardFilm';
import { useState as useStateMock } from 'react';

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useState: jest.fn(),
}));

describe('CardFilm', () => {
  const setState = jest.fn();
  beforeEach(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (useStateMock as jest.Mock).mockImplementation((init: any) => [init, setState]);
  });
  it('if mouseOut on link, setState shoul be called', async () => {
    await act(async () => {
      renderWithProviders(
        <CardFilm
          filmId={mockFilmTest.id}
          image={mockFilmTest.poster}
          name={mockFilmTest.name}
          enName={mockFilmTest.originalName}
          duration={mockFilmTest.duration}
          rating={mockFilmTest.rating}
        />
      );
    });
    fireEvent.mouseOut(screen.getByTestId('CardFilm_link'));
    expect(useStateMock).toHaveBeenCalled();
    expect(screen.getByTestId('CardFilm_information')).toBeVisible();
  });
  it('if mouseOver on link, information should be show', async () => {
    await act(async () => {
      renderWithProviders(
        <CardFilm
          filmId={mockFilmTest.id}
          image={mockFilmTest.poster}
          name={mockFilmTest.name}
          enName={mockFilmTest.originalName}
          duration={mockFilmTest.duration}
          rating={mockFilmTest.rating}
        />
      );
    });
    fireEvent.mouseOut(screen.getByTestId('CardFilm_link'));
    expect(screen.getByTestId('CardFilm_information')).toBeVisible();
  });
  it('if mouseOver on link, setState shoul be called', async () => {
    await act(async () => {
      renderWithProviders(
        <CardFilm
          filmId={mockFilmTest.id}
          image={mockFilmTest.poster}
          name={mockFilmTest.name}
          enName={mockFilmTest.originalName}
          duration={mockFilmTest.duration}
          rating={mockFilmTest.rating}
        />
      );
    });
    fireEvent.mouseOver(screen.getByTestId('CardFilm_link'));
    expect(useStateMock).toHaveBeenCalled();
  });
});
