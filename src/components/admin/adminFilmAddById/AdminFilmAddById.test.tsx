import React from 'react';
import { act, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import AdminFilmAddById from './AdminFilmAddById';
import { renderWithProviders } from '../../../utils/test-utils';
import { useState as useStateMock } from 'react';

const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}));

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useState: jest.fn(),
}));

// const setState = jest.fn();
// beforeEach(() => {
//   (useStateMock as jest.Mock).mockImplementation((init: any) => [init, setState]);
// });

describe('AdminFilmAddById', () => {
  const setState = jest.fn();
  beforeEach(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (useStateMock as jest.Mock).mockImplementation((init: any) => [init, setState]);
  });
  test('if input is not empty, setState 3 times', async () => {
    await act(async () => {
      renderWithProviders(<AdminFilmAddById />);
    });
    expect(screen.getByText(/Добавить/i)).toBeInTheDocument();
    const input: HTMLInputElement = screen.getByTestId('Admin_input');
    expect(input).toBeInTheDocument();
    fireEvent.change(input, { target: { value: '2' } });
    expect(input.value).toBe('2');
    fireEvent.click(screen.getByRole('button', { name: /Добавить/i }));
    expect(useStateMock).toHaveBeenCalledTimes(3);
  });
});
