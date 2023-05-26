import { BrowserRouter } from "react-router-dom";
import { store } from '../../store/mainStore';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom';
import MainSlider from './MainSlider';
import renderer from 'react-test-renderer';
describe('Тестим компонент слайдера большого размера', () => {

  it('Тест слайдера', async () => {
    const tree = renderer.create(<BrowserRouter><Provider store={store}><MainSlider items={[]} /></Provider></BrowserRouter>);
    expect(tree).toMatchSnapshot();
  })
})