import { compare, genSaltSync, hashSync } from 'bcryptjs';
import UserModel from '../database/models/User.model.ts';
import { INewUser } from '../interfaces/INewUser.interface';
import userFields from '../utils/userValidation';

export default class UserService {
  protected userModel = UserModel;

  public async login(userData: INewUser) {
    await userFields.validateAsync(userData);
    const { email, password } = userData;
    const user = await this.userModel.findOne({ where: { email } });
    if (!user) return { code: 401 };
    const check = await compare(password, user.password).then((res) => res);
    if (!check) return { code: 401 };
    const salt = genSaltSync(10);
    const newHash = hashSync(user.username, salt);
    return { code: 200, payload: newHash };
  }
}
