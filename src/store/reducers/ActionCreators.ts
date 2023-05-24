import { TFilmAdding } from './../../type/TFilm';
import axios from 'axios';
// import { TAppDispatch } from '../store';
// import { URL, headers } from '../../service/constans';
import { createAsyncThunk } from '@reduxjs/toolkit';
import fakeLogin from '../../service/fakeReg';
import { IInitialState } from './UserAuthSlice';
import { URL, headers } from '../../service/constans';
import { getCookie } from '../../service/getCookie';

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

export const addFilm = createAsyncThunk(
  'films/add',
  async (film: Omit<TFilmAdding, 'error' | 'isLoading'>, thunkAPI) => {
    try {
      const res = await axios.post<
        Omit<TFilmAdding, 'error' | 'isLoading'>,
        { data: { id: number } }
      >(`${URL}/films`, film, {
        headers: {
          Accept: 'application/json',
          authorization: `Bearer ${getCookie('token')}`,
        },
      });
      debugger;
      return res.data.id;
    } catch (e) {
      return thunkAPI.rejectWithValue('Ошибка');
    }
  }
);

export const addGenre = createAsyncThunk(
  'genre/add',
  async (genre: { genre: string; filmId: number }, thunkAPI) => {
    try {
      const res = await axios.post<
        Omit<TFilmAdding, 'error' | 'isLoading'>,
        { data: IInitialState & { id: number } }
      >(
        `${URL}/films/${genre.filmId}/add/genre`,
        { name: genre.genre },
        {
          headers: {
            Accept: 'application/json',
            authorization: `Bearer ${getCookie('token')}`,
          },
        }
      );
      return res.data;
    } catch (e) {
      return thunkAPI.rejectWithValue('Ошибка');
    }
  }
);
