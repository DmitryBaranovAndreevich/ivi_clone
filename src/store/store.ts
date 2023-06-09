import addGenreSlice from './reducers/AddGenreSlice';
import addFilmsSlice from './reducers/AddFilmSlice';
import { searchApi } from './api/searchApi';
import reviewReducer from './reducers/ReviewSlice';
import searchReducer from './reducers/SearchSlice';
import moviesSortReduser from './reducers/MoviesSort';
import { appApi } from './api/appApi';
import type { PreloadedState } from '@reduxjs/toolkit';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userLoginReduser from './reducers/UserLoginSlice';
import userAuthReduser from './reducers/UserAuthSlice';
import appReducer from './reducers/App';
import { filmApi } from './api/filmApi';
import { personApi } from './api/personApi';
import { reviewApi } from './api/reviewApi';
import { adminApi } from './api/adminApi';
import { authApi } from './api/authApi';

export const rootReducer = combineReducers({
  appReducer,
  userLoginReduser,
  moviesSortReduser,
  reviewReducer,
  searchReducer,
  userAuthReduser,
  addFilmsSlice,
  addGenreSlice,
  [authApi.reducerPath]: authApi.reducer,
  [appApi.reducerPath]: appApi.reducer,
  [filmApi.reducerPath]: filmApi.reducer,
  [personApi.reducerPath]: personApi.reducer,
  [reviewApi.reducerPath]: reviewApi.reducer,
  [searchApi.reducerPath]: searchApi.reducer,
  [adminApi.reducerPath]: adminApi.reducer,
});

export const setupStore = (preloadedState?: PreloadedState<TRootState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat([
        authApi.middleware,
        appApi.middleware,
        filmApi.middleware,
        personApi.middleware,
        reviewApi.middleware,
        searchApi.middleware,
        adminApi.middleware,
      ]),
  });
};

export type TRootState = ReturnType<typeof rootReducer>;
export type TAppStore = ReturnType<typeof setupStore>;
export type TAppDispatch = TAppStore['dispatch'];
