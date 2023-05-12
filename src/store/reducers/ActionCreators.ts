import axios from 'axios';
// import { TAppDispatch } from '../store';
// import { URL, headers } from '../../service/constans';
import { createAsyncThunk } from '@reduxjs/toolkit';
import fakeLogin from '../../service/fakeReg';
import { IInitialState } from './UserAuthSlice';
import { URL, headers } from '../../service/constans';

export const loginUser = createAsyncThunk(
  'user/login',
  async (user: { email: string; password: string }, thunkAPI) => {
    try {
      const res = await axios.post<
        { email: string; password: string },
        { data: { token: string } }
      >(`${URL}/auth/login`, user, { headers });
      return res.data;
    } catch (e) {
      return thunkAPI.rejectWithValue('Не удалось войти');
    }
  }
);

export const authUser = createAsyncThunk(
  'user/auth',
  async (user: Omit<IInitialState, 'error' | 'isLoading'>, thunkAPI) => {
    try {
      const res = await axios.post<
        Omit<IInitialState, 'error' | 'isLoading'>,
        { data: IInitialState & { id: number } }
      >(`${URL}/users`, user, { headers });
      return res.data;
    } catch (e) {
      return thunkAPI.rejectWithValue('Регистрация не удалась');
    }
  }
);
