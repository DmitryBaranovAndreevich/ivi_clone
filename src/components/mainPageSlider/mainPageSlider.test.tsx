import { render, screen, act } from '@testing-library/react';
import MainPageSlider from './MainPageSlider';
import { BrowserRouter } from "react-router-dom";
import { store } from '../../store/mainStore';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom';

describe('Тестим компонент слайдера на главной странице', () => {
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