import 'whatwg-fetch';
import { BrowserRouter } from 'react-router-dom';
import { store } from '../../store/mainStore';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom';
import MainSlider from './MainSlider';
import renderer from 'react-test-renderer';
import { URL } from '../../service/constans';
import fetchMock from 'jest-fetch-mock';

describe('Тестим компонент слайдера большого размера', () => {
  beforeAll(() => {
    fetchMock.mockOnceIf(URL, () =>
      Promise.resolve({
        status: 200,
        body: JSON.stringify([]),
      })
    );
  });

  it('Тест слайдера', async () => {
    const tree = renderer.create(
      <BrowserRouter>
        <Provider store={store}>
          <MainSlider items={[]} />
        </Provider>
      </BrowserRouter>
    );
    expect(tree).toMatchSnapshot();
  });
});
