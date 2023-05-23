import React from 'react';
import renderer from 'react-test-renderer';
import Main from './Main';
import { Provider } from 'react-redux';
import { store } from '../../store/mainStore';

it('Главная страница рендерится без ошибок', () => {
  jest.spyOn(Storage.prototype, 'getItem');
  localStorage.getItem = jest.fn();

  const tree = renderer.create(
    <Provider store={store}>
      <Main />
    </Provider>
  );

  expect(tree).toMatchInlineSnapshot(`
    <div>
      <div
        className="{spinnerStyle.spinner} undefined"
      >
        <i
          className="undefined undefined"
        />
      </div>
    </div>
  `);
});
