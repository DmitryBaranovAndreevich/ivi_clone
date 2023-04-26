import { appApi } from './api/appApi';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { appReducer } from './reducers/App';
import { moviesFilter } from './reducers/MoviesFilter';

const rootReducer = combineReducers({
  // [appApi.reducerPath]: appApi.reducer,
  app: appReducer.reducer,
  moviesFilter: moviesFilter.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type TRootState = ReturnType<typeof rootReducer>;
export type TAppStore = ReturnType<typeof setupStore>;
export type TAppDispatch = TAppStore['dispatch'];

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
window.store = rootReducer;
