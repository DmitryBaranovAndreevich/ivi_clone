export interface IUser {
  id: number;
  email: string;
  password: string;
  first_name: string;
  second_name: string;
  phone: string;
  age: number;
  country: string;
  refreshToken: string;
  roles: Array<IRoles>;
}

export interface IRoles {
  id: number;
  value: string;
  description: string;
}

export type TValueRole = 'SUPERUSER';
