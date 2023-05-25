import 'whatwg-fetch';
import { render, screen, act } from '@testing-library/react';
import MainPageSlider from './MainPageSlider';
import { BrowserRouter } from "react-router-dom";
import { store } from '../../store/mainStore';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom';
import fetchMock from 'jest-fetch-mock';
import { URL } from '../../service/constans';

describe('Тестим компонент слайдера на главной странице', () => {
  beforeAll(() => {
    fetchMock.mockOnceIf(URL, () =>
      Promise.resolve({
        status: 200,
        body: JSON.stringify([]),
      })
    );
  });
  const testTitle = 'Test title';
  it('Рендерим слайдер с мелкого размера', async () => {
    await act(async () => render(<BrowserRouter><Provider store={store}><MainPageSlider genre={'test'} size={'medium'} title={testTitle} /></Provider></BrowserRouter>))
    const title = screen.getByText(testTitle);
    expect(title).toBeInTheDocument();
  }),
    it('Рендерим слайдер большого размера', async () => {
      await act(async () => render(<BrowserRouter><Provider store={store}><MainPageSlider genre={'test'} size={'medium'} title={testTitle} /></Provider></BrowserRouter>))
      const title = screen.getByText(testTitle);
      expect(title).toBeInTheDocument();
    })
})