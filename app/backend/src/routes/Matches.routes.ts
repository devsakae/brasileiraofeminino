import { Request, Response, Router } from 'express';
import MatchesController from '../controllers/Matches.controller';
import validateToken from '../middlewares/validateToken';

const matchesRouter = Router();
const matchesController = new MatchesController();

matchesRouter.get('/', (req: Request, res: Response) => {
  if (req.query.inProgress) matchesController.getOnGoing(req, res);
  else matchesController.getAll(req, res);
});

matchesRouter.patch('/:id/finish', validateToken, (req: Request, res: Response) => {
  matchesController.finishMatch(req, res);
});

export default matchesRouter;
