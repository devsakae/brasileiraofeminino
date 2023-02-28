import { Request, Response } from 'express';
import UserService from '../services/User.service';
import getError from '../utils/getError';

export default class UserController {
  constructor(private userService = new UserService()) {}

  public login = async (req: Request, res: Response) => {
    try {
      const response = await this.userService.login(req.body);
      if (response.code === 401) res.status(401).json({ message: 'Invalid email or password' });
      res.status(response.code).json({ token: response.payload });
    } catch (e: any) {
      const error = getError(e);
      res.status(error.code).json({ message: error.message });
    }
  };
}
