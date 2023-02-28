import { compare } from 'bcryptjs';
import { sign, verify } from 'jsonwebtoken';
import UserModel from '../database/models/User.model.ts';
import { INewUser } from '../interfaces/INewUser.interface';
import { JwtUser } from '../interfaces/JwtUser.interface';
import userFields from '../utils/userValidation';

const secret = process.env.JWT_SECRET || 'jwtsecret';

export default class UserService {
  protected userModel = UserModel;

  public async login(userData: INewUser) {
    await userFields.validateAsync(userData);
    const { email, password } = userData;
    const user = await this.userModel.findOne({ where: { email } });
    if (!user) return { code: 401 };
    const check = await compare(password, user.password).then((res) => res);
    if (!check) return { code: 401 };
    const token = sign({ data: { user } }, secret, {
      expiresIn: '7d',
      algorithm: 'HS256',
    });
    return { code: 200, payload: token };
  }

  public async role(userToken: string) {
    const { data: { user } } = verify(userToken, secret) as JwtUser;
    const refreshedUser = await this.userModel.findOne({ where: { username: user.role } });
    return refreshedUser?.role;
  }
}
