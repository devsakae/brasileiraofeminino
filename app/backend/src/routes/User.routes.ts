import { Router } from 'express';
import UserController from '../controllers/User.controller';
import validateToken from '../middlewares/validateToken';

const userRouter = Router();

const userController = new UserController();

userRouter.post('/', userController.login);
userRouter.get('/role', validateToken, userController.role);

export default userRouter;
