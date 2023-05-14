import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { loginUser } from './ActionCreators';

interface IInitialState {
  email: string;
  password: string;
  isLoading: boolean;
  error: string;
  token: string | null;
  isRegister: boolean;
}

const initialState: IInitialState = {
  email: '',
  password: '',
  isLoading: false,
  error: '',
  token: null,
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
    setDefaultValue(state) {
      state.email = initialState.email;
      state.password = initialState.password;
      state.isRegister = initialState.isRegister;
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
        state.token = action.payload.token;
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
