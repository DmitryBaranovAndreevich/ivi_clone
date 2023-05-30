import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { authUser } from './ActionCreators';

export interface IInitialState {
  id?: string;
  email: string;
  password: string;
  first_name: string;
  second_name: string;
  error: string;
  age: number | null;
  country: string;
  phone: string;
  isLoading: boolean;
  roles?: string[];
}

export interface IUser extends IInitialState {
  id: string;
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
  roles: [],
};

export const userAuthSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setEmailNameSurName(
      state,
      action: PayloadAction<{ email: string; second_name: string; first_name: string }>
    ) {
      const { email, first_name, second_name } = action.payload;
      state.email = email;
      state.first_name = first_name;
      state.second_name = second_name;
    },
    setPassAgeContryPhone(
      state,
      action: PayloadAction<{ password: string; age: number; country: string; phone: string }>
    ) {
      const { password, age, country, phone } = action.payload;
      state.password = password;
      state.age = age;
      state.country = country;
      state.phone = phone;
    },
    setUser(state, action: PayloadAction<IUser>) {
      const { id, email, first_name, second_name, age, country, phone, roles } = action.payload;
      state.id = id;
      state.email = email;
      state.first_name = first_name;
      state.second_name = second_name;
      state.age = age;
      state.country = country;
      state.phone = phone;
      state.roles = roles;
    },
  },
  extraReducers: (builder) => {
    auth();
    function auth() {
      const { pending, fulfilled, rejected } = authUser;
      builder.addCase(pending, (state) => {
        state.isLoading = true;
      });
      builder.addCase(fulfilled, (state, action) => {
        state.isLoading = false;
        state = action.payload;
        state.error = '';
      });
      builder.addCase(rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });
    }
  },
});

export default userAuthSlice.reducer;
