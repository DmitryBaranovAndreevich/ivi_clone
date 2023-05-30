import { BrowserRouter } from 'react-router-dom';
import { store } from '../../store/mainStore';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom';
import { render, screen, act } from '@testing-library/react';
import CategoriesSlider from './CategoriesSlider';
import { mockFilmTest } from '../../mockData/mockTest';

describe('Тестим компонент слайдера большого размера', () => {
  const testTitle = 'test';
  it('Тест слайдера big', async () => {
    await act(async () =>
      render(
        <BrowserRouter>
          <Provider store={store}>
            <CategoriesSlider items={[mockFilmTest]} size={'big'} title={testTitle} />
          </Provider>
        </BrowserRouter>
      )
    );
    const slider = screen.getByTestId('CategoriesSlider_slider');
    const style = window.getComputedStyle(slider);
    expect(style.height).toBe('500px');
  });

  it('Тест слайдера small', async () => {
    await act(async () =>
      render(
        <BrowserRouter>
          <Provider store={store}>
            <CategoriesSlider items={[mockFilmTest]} size={'medium'} title={testTitle} />
          </Provider>
        </BrowserRouter>
      )
    );
    const slider = screen.getByTestId('CategoriesSlider_slider');
    const style = window.getComputedStyle(slider);
    expect(style.height).toBe('350px');
  });
});
