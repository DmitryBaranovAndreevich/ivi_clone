import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { addFilm } from './ActionCreators';

export interface IInitialState {
  email: string;
  password: string;
  first_name: string;
  second_name: string;
  error: string;
  age: number | null;
  country: string;
  phone: string;
  isLoading: boolean;
}

const initialState: IInitialState = {
  email: '',
  password: '',
  first_name: '',
  second_name: '',
  age: null,
  country: '',
  phone: '',
  isLoading: false,
  error: '',
};

export const addFilmsSlice = createSlice({
  name: 'films',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    add();
    function add() {
      const { pending, fulfilled, rejected } = addFilm;
      builder.addCase(pending, (state) => {
        state.isLoading = true;
      });
      builder.addCase(fulfilled, (state, action) => {
        state.isLoading = false;
        // state = action.payload;
        state.error = '';
      });
      builder.addCase(rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });
    }
  },
});

export default addFilmsSlice.reducer;
