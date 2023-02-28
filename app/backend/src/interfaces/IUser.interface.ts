export type userRole = 'admin' | 'user';

export interface IUser {
  id: number;
  username: string;
  role: userRole;
  email: string;
  password: string;
}
