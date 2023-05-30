import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IRoles } from '../../type/TUser';
import { loginUser } from './ActionCreators';

export interface IUserLoginInitialState {
  email: string;
  password: string;
  isLoading: boolean;
  error: string;
  token: string | null;
  isRegister: boolean;
  roles: null | Array<string>;
}

const initialState: IUserLoginInitialState = {
  email: '',
  password: '',
  isLoading: false,
  error: '',
  token: null,
  isRegister: false,
  roles: null,
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
      state.roles = null;
    },
    successAuth(state, action: PayloadAction<{ token: string }>) {
      state.token = action.payload.token;
      state.isRegister = true;
    },
    setRoles(state, action: PayloadAction<{ roles: Array<IRoles> }>) {
      state.roles = action.payload.roles.map((role: IRoles) => {
        return role.value;
      });
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
