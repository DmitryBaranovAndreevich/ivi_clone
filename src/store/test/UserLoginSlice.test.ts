import { mockArrayRoles, mockArrayStringRoles, textContent } from '../../mockData/mockTest';
import UserLoginSlice, { IUserLoginInitialState, userLoginSlice } from '../reducers/UserLoginSlice';

describe('userLoginSlice', () => {
  const state: IUserLoginInitialState = {
    email: '',
    password: '',
    isLoading: false,
    error: '',
    token: null,
    isRegister: false,
    roles: null,
  };
  it('setEmail should be set correct', async () => {
    const initialState: IUserLoginInitialState = { ...state, email: '' };
    const action = userLoginSlice.actions.setEmail(textContent);
    const expectedState: IUserLoginInitialState = { ...state, email: textContent };
    expect(UserLoginSlice(initialState, action)).toEqual(expectedState);
  });
  it('setPassword should be set correct', async () => {
    const initialState: IUserLoginInitialState = { ...state, password: '' };
    const action = userLoginSlice.actions.setPassword(textContent);
    const expectedState: IUserLoginInitialState = { ...state, password: textContent };
    expect(UserLoginSlice(initialState, action)).toEqual(expectedState);
  });
  it('setDefaultValue should be set correct', async () => {
    const initialState: IUserLoginInitialState = {
      ...state,
      email: textContent,
      password: textContent,
      isRegister: true,
      roles: ['USER'],
    };
    const action = userLoginSlice.actions.setDefaultValue();
    const expectedState: IUserLoginInitialState = {
      ...state,
      email: '',
      password: '',
      isRegister: false,
      roles: null,
    };
    expect(UserLoginSlice(initialState, action)).toEqual(expectedState);
  });
  it('successAuth should be set correct', async () => {
    const initialState: IUserLoginInitialState = {
      ...state,
      token: '',
    };
    const action = userLoginSlice.actions.successAuth({ token: textContent });
    const expectedState: IUserLoginInitialState = {
      ...state,
      token: textContent,
      isRegister: true,
    };
    expect(UserLoginSlice(initialState, action)).toEqual(expectedState);
  });
  it('setRoles should be set correct', async () => {
    const initialState: IUserLoginInitialState = {
      ...state,
      roles: null,
    };
    const action = userLoginSlice.actions.setRoles({ roles: mockArrayRoles });
    const expectedState: IUserLoginInitialState = {
      ...state,
      roles: mockArrayStringRoles,
    };
    expect(UserLoginSlice(initialState, action)).toEqual(expectedState);
  });
});
