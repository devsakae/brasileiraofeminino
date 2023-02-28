import { Request, Response } from 'express';
import UserService from '../services/User.service';

export default class UserController {
  constructor(private userService = new UserService()) {}

  public login = async (req: Request, res: Response) => {
    try {
      const response = await this.userService.login(req.body);
      res.status(201).json({ message: `Welcome, ${response}` });
    } catch (err: any) {
      res.status(400).json({ message: err.message });
    }
  };
}
