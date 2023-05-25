// import thunk from 'redux-thunk';
// import { render } from '@testing-library/react';
// import { Provider } from 'react-redux';
// import configureStore from 'redux-mock-store';

// const state = {
//   app: testStateApp,
//   basket: testStateBasket,
//   catalog: testStateCatalog,
//   category: testStateCategory,
//   filter: testStateFilter,
//   admin: {}
// }

// const stateEmty = {
//   app: testStateApp,
//   basket: {
//     basket: []
//   },
//   catalog: testStateCatalogEmpty,
//   category: testStateCategoryEmpty,
//   filter: {
//     category: null,
//     subcategory: null,
//     minPriceProducts: 0,
//     maxPriceProducts: 10000,
//     manufacturer: null,
//   }
// }

// export const renderWithRedux = (component) => {
//   const mockStore = configureStore([thunk]);

//   const store = mockStore(state);

//   return render(
//     <Provider store={store}>
//       {component}
//     </Provider>
//   )
// }

// export const renderWithReduxEmty = (component) => {
//   const mockStore = configureStore();
//   const store = mockStore(stateEmty);

//   return render(
//     <Provider store={store}>
//       {component}
//     </Provider>
//   )
// }
