import { BrowserRouter } from "react-router-dom";
import { store } from '../../store/mainStore';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom';
import { render, screen, act } from '@testing-library/react';
import CategoriesSlider from './CategoriesSlider';

const testFilm = {
    id: 1,
    name: 'test',
    originalName: 'test',
    poster: 'test',
    trailer: 'test',
    mpaaRating: 'test',
    rating: 1,
    ratingsNumber: 1,
    year: 1,
    duration: 1,
    description: 'test',
    directors: [],
    actors: [],
    writers:[],
    producers: [],
    cinematography: [],
    musicians: [],
    designers: [],
    editors: [],
    genres: [],
    awards: [],
    countries: [],
    reviews: [],
    relatedFilms: [],
  }
  

describe('Тестим компонент слайдера большого размера', () => {
    const testTitle = "test";
  it('Тест слайдера big', async () => {
    await act(async () => render(<BrowserRouter><Provider store={store}><CategoriesSlider items={[testFilm]} size={'big'} title={testTitle} /></Provider></BrowserRouter>))
    const title = screen.getByText(testTitle);
    expect(title).toBeInTheDocument();
  })

  it('Тест слайдера small', async () => {
    await act(async () => render(<BrowserRouter><Provider store={store}><CategoriesSlider items={[testFilm]} size={'medium'} title={testTitle} /></Provider></BrowserRouter>))
    const title = screen.getByText(testTitle);
    expect(title).toBeInTheDocument();
  })
})