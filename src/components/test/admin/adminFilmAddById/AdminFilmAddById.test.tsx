import React from 'react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import AdminFilmAddById from '../../../admin/adminFilmAddById/AdminFilmAddById';
import { renderWithProviders } from '../../../../utils/test-utils';
import { mockFilmTest } from '../../../../mockData/mockTest';
import { useAddFilmByIdQuery } from '../../../../store/api/adminApi';
// import { useAddFilmByIdQuery } from '../../../../store/api/adminApi';

const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}));

export const handlers = [
  rest.get('/parse/1', (req, res, ctx) => {
    return res(ctx.json(''), ctx.delay(150));
  }),
];

const server = setupServer(...handlers);

beforeAll(() => {
  server.listen();
});

afterEach(() => server.resetHandlers());

afterAll(() => server.close());

test('qqq', async () => {
  renderWithProviders(<AdminFilmAddById />);

  expect(screen.getByText(/Добавить/i)).toBeInTheDocument();
  expect(screen.queryByText(/Фильм успешно добавлен/i)).not.toBeInTheDocument();

  // after clicking the 'Fetch user' button, it should now show that it is fetching the user
  fireEvent.click(screen.getByRole('button', { name: /Добавить/i }));
  // expect(screen.getByText(/no user/i)).toBeInTheDocument();
  // const action = useAddFilmByIdQuery();
  // after some time, the user should be received
  // expect(useAddFilmByIdQuery).toBeCalledTimes(1);
  // expect(screen.queryByText(/no user/i)).not.toBeInTheDocument();
  // expect(screen.queryByText(/Fetching user\.\.\./i)).not.toBeInTheDocument();
});
