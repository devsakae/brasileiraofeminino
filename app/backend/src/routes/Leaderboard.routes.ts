import { Request, Response, Router } from 'express';
import Leaderboard from '../controllers/Leaderboard.controller';

const leaderRouter = Router();
const leaderController = new Leaderboard();

leaderRouter.get('/home', (req: Request, res: Response) => leaderController.getHome(req, res));

export default leaderRouter;
