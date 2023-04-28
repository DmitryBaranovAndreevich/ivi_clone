import moviesSortReduser from './reducers/MoviesSort';
import { appApi } from './api/appApi';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userLoginReduser from './reducers/UserLoginSlice';
import appReducer from './reducers/App';
import moviesFilterReduser from './reducers/MoviesFilter';

const rootReducer = combineReducers({
  appReducer,
  userLoginReduser,
  moviesSortReduser,
  moviesFilterReduser,
  [appApi.reducerPath]: appApi.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(appApi.middleware),
  });
};

export type TRootState = ReturnType<typeof rootReducer>;
export type TAppStore = ReturnType<typeof setupStore>;
export type TAppDispatch = TAppStore['dispatch'];
