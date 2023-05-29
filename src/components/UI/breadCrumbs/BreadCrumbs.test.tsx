import 'whatwg-fetch';
import { screen, act, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { renderWithProviders } from '../../../utils/test-utils';
import BreadCrumbs from './BreadCrumbs';
import { TName } from '../../../utils/helperFilmBreadCrumbs';

type TConstantMean = {
  title: string;
  href: string;
};

const paramsBreadCrumbsTest: Array<Array<TName>> = [
  [{ name: 'комедия', enName: 'comedy' }],
  [{ name: '2023', enName: '2023' }],
  [{ name: 'Великобритания', enName: 'uk' }],
];

const constantMean: TConstantMean = {
  title: 'Фильмы',
  href: '/movies',
};

const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}));

describe('BreadCrumbs', () => {
  it('if listParams has, component should has this params', async () => {
    await act(async () => {
      renderWithProviders(<BreadCrumbs listParams={paramsBreadCrumbsTest} />);
    });
    expect(screen.getByText(/комедия/i)).toBeInTheDocument();
    expect(screen.getByText(/2023/i)).toBeInTheDocument();
    expect(screen.getByText(/Великобритания/i)).toBeInTheDocument();
  });
  it('if constantMean has, component should has title from constantMean', async () => {
    await act(async () => {
      renderWithProviders(
        <BreadCrumbs listParams={paramsBreadCrumbsTest} constantMean={constantMean} />
      );
    });
    expect(screen.getByText(constantMean.title)).toBeInTheDocument();
  });
  it('if constantMean has, click on button with title from constantMean should be called navigate ', async () => {
    await act(async () => {
      renderWithProviders(
        <BreadCrumbs listParams={paramsBreadCrumbsTest} constantMean={constantMean} />
      );
    });
    fireEvent.click(screen.getByRole('button', { name: constantMean.title }));
    expect(mockedUsedNavigate).toBeCalledTimes(1);
  });
  it('click on main button should be called navigate', async () => {
    await act(async () => {
      renderWithProviders(
        <BreadCrumbs listParams={paramsBreadCrumbsTest} constantMean={constantMean} />
      );
    });
    fireEvent.click(screen.getByRole('button', { name: 'filter.crumbs' })); //найти эту кнопку
    expect(mockedUsedNavigate).toBeCalled();
  });
});
