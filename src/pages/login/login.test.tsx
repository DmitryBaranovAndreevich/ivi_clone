import { Provider } from 'react-redux';
import { store } from '../../store/mainStore';
import renderer from 'react-test-renderer';
import LoginEmail from './LoginEmail';
import LoginFinish from './LoginFinish';
import * as router from 'react-router';
import { MemoryRouter } from 'react-router-dom';

describe('Тестим страницу входа', () => {
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
  it('Страница loginEmail рендерится без ошибок', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <MemoryRouter>
          <LoginEmail />
        </MemoryRouter>
      </Provider>
    );
    expect(tree).toMatchSnapshot();
  });
  it('Страница loginFinish рендерится без ошибок', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <MemoryRouter>
          <LoginFinish />
        </MemoryRouter>
      </Provider>
    );
    expect(tree).toMatchSnapshot();
  });
});
