import 'whatwg-fetch';
import { screen, act, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { renderWithProviders } from '../../../utils/test-utils';
import { textContent } from '../../../mockData/mockTest';
import ButtonWithoutBgc from './ButtonWithoutBgc';

const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}));

describe('ButtonWithoutBgc', () => {
  it('ButtonWithoutBgc should include title', async () => {
    await act(async () => {
      renderWithProviders(
        <ButtonWithoutBgc onClick={mockedUsedNavigate}>{textContent}</ButtonWithoutBgc>
      );
    });
    expect(screen.getByText(textContent)).toBeInTheDocument();
  });
  it('click on button should called function', async () => {
    await act(async () => {
      renderWithProviders(
        <ButtonWithoutBgc onClick={mockedUsedNavigate}>{textContent}</ButtonWithoutBgc>
      );
    });
    fireEvent.click(screen.getByRole('button', { name: textContent }));
    expect(mockedUsedNavigate).toBeCalledTimes(1);
  });
});
