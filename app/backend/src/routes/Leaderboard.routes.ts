import { Request, Response, Router } from 'express';
import Leaderboard from '../controllers/Leaderboard.controller';

const leaderRouter = Router();
const leaderController = new Leaderboard();

// leaderRouter.get('/', (req: Request, res: Response) => leaderController.getComplete(req, res));
leaderRouter.get('/home', (req: Request, res: Response) => leaderController.getHome(req, res));
leaderRouter.get('/away', (req: Request, res: Response) => leaderController.getaway(req, res));

export default leaderRouter;
