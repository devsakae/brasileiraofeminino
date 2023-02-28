type userRole = 'admin' | 'user';

export interface JwtUser {
  data: {
    id: number;
    role: userRole;
    email: string;
  },
  iat: number,
  exp: number,
}
