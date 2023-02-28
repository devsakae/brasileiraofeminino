import { Router } from 'express';
import UserController from '../controllers/User.controller';

const userRouter = Router();

const userController = new UserController();

userRouter.post('/', userController.login);

export default userRouter;
