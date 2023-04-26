import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { loginUser } from './ActionCreators';

interface IInitialState {
  email: string;
  password: string;
  isLoading: boolean;
  error: string;
  tokens: { accesstoken: string | null; refreshtoken: string | null };
  isRegister: boolean;
}

const initialState: IInitialState = {
  email: '',
  password: '',
  isLoading: false,
  error: '',
  tokens: { accesstoken: null, refreshtoken: null },
  isRegister: false,
};

export const userLoginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setEmail(state, action: PayloadAction<string>) {
      state.email = action.payload;
    },
    setPassword(state, action: PayloadAction<string>) {
      state.password = action.payload;
    },
  },
  extraReducers: (builder) => {
    login();
    function login() {
      const { pending, fulfilled, rejected } = loginUser;
      builder.addCase(pending, (state) => {
        state.isLoading = true;
      });
      builder.addCase(fulfilled, (state, action) => {
        state.isLoading = false;
        state.isRegister = true;
        state.tokens = action.payload;
        state.error = '';
        state.isRegister = true;
      });
      builder.addCase(rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
        state.isRegister = false;
      });
    }
  },
});

export default userLoginSlice.reducer;
