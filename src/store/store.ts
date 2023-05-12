import moviesSortReduser from './reducers/MoviesSort';
import { appApi } from './api/appApi';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userLoginReduser from './reducers/UserLoginSlice';
import userAuthReduser from './reducers/UserAuthSlice';
import appReducer from './reducers/App';
import moviesFilterReduser from './reducers/MoviesFilter';
import { filmApi } from './api/filmApi';

const rootReducer = combineReducers({
  appReducer,
  userLoginReduser,
  moviesSortReduser,
  moviesFilterReduser,
  userAuthReduser,
  [appApi.reducerPath]: appApi.reducer,
  [filmApi.reducerPath]: filmApi.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat([appApi.middleware, filmApi.middleware]),
  });
};

export type TRootState = ReturnType<typeof rootReducer>;
export type TAppStore = ReturnType<typeof setupStore>;
export type TAppDispatch = TAppStore['dispatch'];
