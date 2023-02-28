import UserModel from '../database/models/User.model.ts';
import { INewUser } from '../interfaces/INewUser.interface';
import userFields from '../utils/userValidation';

export default class UserService {
  protected userModel = UserModel;

  public async login(userData: INewUser) {
    userFields.validateAsync(userData);
    const { email, password } = userData;
    const user = await this.userModel.findOne({ where: { email, password } });
    return user;
  }
}
