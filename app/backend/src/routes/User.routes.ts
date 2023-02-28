import { Request, Response, Router } from 'express';
import UserController from '../controllers/User.controller';
import validateToken from '../middlewares/validateToken';

const userRouter = Router();

const userController = new UserController();

userRouter.post('/', (req: Request, res: Response) => userController.login(req, res));
userRouter.get(
  '/role',
  validateToken,
  (req: Request, res: Response) => userController.role(req, res),
);

export default userRouter;
