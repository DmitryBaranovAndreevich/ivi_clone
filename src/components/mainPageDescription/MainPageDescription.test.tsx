import { act, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import MainPageDescription from './MainPageDescription';
import { renderWithProviders } from '../../utils/test-utils';

describe('MainPageDescription', () => {
  it('At first should be show button expand', async () => {
    await act(async () => {
      renderWithProviders(<MainPageDescription />);
    });
    expect(screen.getByTestId('MainPageDescription_expand')).toBeInTheDocument();
  });
  it('after click on button expand, it should be hidden ', async () => {
    await act(async () => {
      renderWithProviders(<MainPageDescription />);
    });
    expect(screen.getByTestId('MainPageDescription_expand')).toBeInTheDocument();
    fireEvent.click(screen.getByTestId('MainPageDescription_expand'));
    expect(screen.queryByTestId('MainPageDescription_expand')).not.toBeInTheDocument();
  });
  it('after click on button expand, button collapse should be show ', async () => {
    await act(async () => {
      renderWithProviders(<MainPageDescription />);
    });
    expect(screen.getByTestId('MainPageDescription_expand')).toBeInTheDocument();
    fireEvent.click(screen.getByTestId('MainPageDescription_expand'));
    expect(screen.queryByTestId('MainPageDescription_collapse')).toBeInTheDocument();
  });
  it('after click on button collapse, button collapse should hidden ', async () => {
    await act(async () => {
      renderWithProviders(<MainPageDescription />);
    });
    expect(screen.getByTestId('MainPageDescription_expand')).toBeInTheDocument();
    fireEvent.click(screen.getByTestId('MainPageDescription_expand'));
    fireEvent.click(screen.getByTestId('MainPageDescription_collapse'));
    expect(screen.queryByTestId('MainPageDescription_collapse')).not.toBeInTheDocument();
  });
});
