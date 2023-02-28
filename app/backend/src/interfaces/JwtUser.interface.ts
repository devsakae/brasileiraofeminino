type userRole = 'admin' | 'user';

export interface JwtUser {
  data: {
    user: {
      id: number;
      username: string;
      role: userRole;
      email: string;
      password: string;
    }
  },
  iat: number,
  exp: number,
}
