import { Router } from 'express';
import TeamController from '../controllers/Team.controller';

const teamRouter = Router();
const teamController = new TeamController();

teamRouter.get('/', teamController.getAll);
teamRouter.get('/:id', teamController.getOne);

export default teamRouter;
