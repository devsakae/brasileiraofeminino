import { Router } from 'express';
import TeamController from '../controllers/team.controller';

const router = Router();

const teamController = new TeamController();

router.get('/teams', teamController.getAll);
router.get('/teams/:id', teamController.getOne);

export default router;
