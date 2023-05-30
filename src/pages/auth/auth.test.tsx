import { Provider } from 'react-redux';
import { store } from '../../store/mainStore';
import AuthEmail from './AuthEmail';
import AuthFinish from './AuthFinish';
import renderer from 'react-test-renderer';
import * as router from 'react-router';
import { MemoryRouter } from 'react-router-dom';

describe('Тестим страницу авторизации', () => {
  const mockUseLocationValue = {
    key: 'key',
    pathname: '/testroute',
    search: '',
    hash: '',
    state: null,
  };
  const navigate = jest.fn();

  jest.mock('react-i18next', () => ({
    useTranslation: jest.fn(),
  }));

  beforeEach(() => {
    jest.spyOn(router, 'useNavigate').mockImplementation(() => navigate);
    jest.spyOn(router, 'useLocation').mockImplementation(() => mockUseLocationValue);
  });
  it('Страница authEmail рендерится без ошибок', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <MemoryRouter>
          <AuthEmail />
        </MemoryRouter>
      </Provider>
    );
    console.log(tree);
    expect(tree).toMatchSnapshot();
  });
  it('Страница authFinish рендерится без ошибок', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <MemoryRouter>
          <AuthFinish />
        </MemoryRouter>
      </Provider>
    );
    expect(tree).toMatchSnapshot();
  });
});
