// import axios from 'axios';
// import { TAppDispatch } from '../store';
// import { URL, headers } from '../../service/constans';
import { createAsyncThunk } from '@reduxjs/toolkit';
import fakeLogin from '../../service/fakeReg';

export const loginUser = createAsyncThunk(
  'user/login',
  async (user: { email: string; password: string }, thunkAPI) => {
    try {
      const res = await fakeLogin(user);
      return res;
    } catch (e) {
      return thunkAPI.rejectWithValue('Регистрация не удалась');
    }
  }
);
