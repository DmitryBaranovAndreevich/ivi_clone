import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userLoginReduser from './reducers/UserLoginSlice';

const rootReducer = combineReducers({
  userLoginReduser,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type TRootState = ReturnType<typeof rootReducer>;
export type TAppStore = ReturnType<typeof setupStore>;
export type TAppDispatch = TAppStore['dispatch'];
