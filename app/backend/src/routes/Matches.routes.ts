import { Request, Response, Router } from 'express';
import MatchesController from '../controllers/Matches.controller';
import avoidSameTeams from '../middlewares/avoidSameTeams';
import validateToken from '../middlewares/validateToken';

const matchesRouter = Router();
const matchesController = new MatchesController();

matchesRouter.get('/', (req: Request, res: Response) => {
  if (req.query.inProgress) return matchesController.getOnGoing(req, res);
  return matchesController.getAll(req, res);
});

matchesRouter.post(
  '/',
  validateToken,
  avoidSameTeams,
  (req: Request, res: Response) => matchesController.newMatch(req, res),
);

matchesRouter.patch('/:id/finish', validateToken, (req: Request, res: Response) => {
  matchesController.finishMatch(req, res);
});

matchesRouter.patch('/:id', validateToken, (req: Request, res: Response) => {
  matchesController.editMatch(req, res);
});

export default matchesRouter;
