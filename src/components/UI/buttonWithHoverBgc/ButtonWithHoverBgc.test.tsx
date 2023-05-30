import 'whatwg-fetch';
import { screen, act, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { renderWithProviders } from '../../../utils/test-utils';
import ButtonWithHoverBgc from './ButtonWithHoverBgc';
import { textContent } from '../../../mockData/mockTest';

const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}));

describe('ButtonWithHoverBgc', () => {
  it('ButtonWithHoverBgc should include title', async () => {
    await act(async () => {
      renderWithProviders(<ButtonWithHoverBgc title={textContent} onClick={mockedUsedNavigate} />);
    });
    expect(screen.getByText(textContent)).toBeInTheDocument();
  });
  it('click on button should called function', async () => {
    await act(async () => {
      renderWithProviders(<ButtonWithHoverBgc title={textContent} onClick={mockedUsedNavigate} />);
    });
    fireEvent.click(screen.getByRole('button', { name: textContent }));
    expect(mockedUsedNavigate).toBeCalledTimes(1);
  });
});
