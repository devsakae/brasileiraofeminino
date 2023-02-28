import { Request, Response } from 'express';
import ErrorInterface from '../interfaces/Error.interface';
import UserService from '../services/User.service';
import getError from '../utils/getError';

export default class UserController {
  constructor(private userService = new UserService()) {}

  public login = async (req: Request, res: Response) => {
    try {
      const response = await this.userService.login(req.body);
      if (response.code === 401) {
        return res.status(401).json({ message: 'Invalid email or password' });
      }
      res.status(response.code).json({ token: response.payload });
    } catch (e) {
      const erro = getError(e as ErrorInterface);
      res.status(erro.code).json({ message: erro.message });
    }
  };

  public role = async (req: Request, res: Response): Promise<void> => {
    try {
      const { headers: { authorization } } = req;
      if (!authorization) throw new Error('Token not found');
      const role = await this.userService.role(authorization);
      res.status(200).json({ role });
    } catch ({ message }) {
      res.status(401).json({ message });
    }
  };
}
