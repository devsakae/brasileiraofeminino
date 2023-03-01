import { compareSync } from 'bcryptjs';
import { sign, verify } from 'jsonwebtoken';
import UserModel from '../database/models/User.model.ts';
import { INewUser } from '../interfaces/INewUser.interface';
import { JwtUser } from '../interfaces/JwtUser.interface';

const secret = process.env.JWT_SECRET || 'jwt_secret';

export default class UserService {
  protected userModel = UserModel;

  public async login(userData: INewUser) {
    const { email, password } = userData;
    const user = await this.userModel.findOne({ where: { email } });
    if (!user) return { code: 401 };
    const check = compareSync(password, user.password);
    if (!check) return { code: 401 };
    const token = sign({ data: {
      id: user.id,
      email: user.email,
      role: user.role,
    } }, secret, {
      expiresIn: '7d',
      algorithm: 'HS256',
    });
    return { code: 200, token };
  }

  public async role(userToken: string) {
    const { data: { id } } = verify(userToken, secret) as JwtUser;
    const refreshedUser = await this.userModel.findOne({ where: { id } });
    return refreshedUser?.role;
  }
}
