import 'whatwg-fetch';
import renderer from 'react-test-renderer';
import Main from './Main';
import { Provider } from 'react-redux';
import { store } from '../../store/mainStore';
import { URL } from '../../service/constans';
import fetchMock from 'jest-fetch-mock';
import { useTranslation } from 'react-i18next';
jest.mock('react-i18next', () => ({
  useTranslation: jest.fn(),
}));
jest.useFakeTimers();
describe('Тестим главную страницу', () => {
  beforeEach(() => {
    (useTranslation as jest.Mock).mockReturnValue({ t: (key: string) => key });
  });

  afterAll(() => {
    jest.runAllTimers();
  });

  it('Главная страница рендерится без ошибок', () => {
    jest.spyOn(Storage.prototype, 'getItem');
    localStorage.getItem = jest.fn();
    jest.runAllTimers();

    const tree = renderer.create(
      <Provider store={store}>
        <Main />
      </Provider>
    );
    expect(tree).toMatchSnapshot();
  });
});
