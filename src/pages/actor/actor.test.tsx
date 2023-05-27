import { Provider } from 'react-redux';
import { store } from '../../store/mainStore';
import renderer from 'react-test-renderer';
import * as router from 'react-router';
import { MemoryRouter } from 'react-router-dom';
import Actor from './Actor';

describe('Тестим страницу входа', () => {
  const navigate = jest.fn();

  jest.mock('react-i18next', () => ({
    useTranslation: jest.fn(),
  }));

  beforeEach(() => {
    jest.spyOn(router, 'useNavigate').mockImplementation(() => navigate);
  });
  it('Страница loginEmail рендерится без ошибок', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <MemoryRouter>
          <Actor />
        </MemoryRouter>
      </Provider>
    );
    expect(tree).toMatchSnapshot();
  });
});
