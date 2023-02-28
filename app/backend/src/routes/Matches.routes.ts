import { Router } from 'express';
import MatchesController from '../controllers/Matches.controller';

const matchesRouter = Router();
const matchesController = new MatchesController();

matchesRouter.get('/', matchesController.getAll);
// teamRouter.get('/:id', teamController.getOne);

export default matchesRouter;
