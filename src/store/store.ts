import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { app } from './reducers/App';
import { moviesFilter } from './reducers/MoviesFilter';

const rootReducer = combineReducers({
  app: app.reducer,
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
