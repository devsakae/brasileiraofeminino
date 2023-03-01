import { Request, Response, Router } from 'express';
import Leaderboard from '../controllers/Leaderboard.controller';

const leaderRouter = Router();
const leaderController = new Leaderboard();

leaderRouter.get('/', (req: Request, res: Response) => leaderController.getAll(req, res));

export default leaderRouter;
