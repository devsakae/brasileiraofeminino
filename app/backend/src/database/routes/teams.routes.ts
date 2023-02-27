import { Router } from 'express';
import TeamController from '../controllers/team.controller';

const router = Router();

const teamController = new TeamController();

router.get('/teams', teamController.getAll);
// router.post('/books', booksController.create);
// router.get(booksSlashId, booksController.getById);
// router.put(booksSlashId, booksController.update);
// router.delete(booksSlashId, booksController.delete);

export default router;
