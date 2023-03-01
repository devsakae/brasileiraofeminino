import { Request, Response } from 'express';
import { InProgress } from '../interfaces/InProgress.interface';
import MatchesService from '../services/Matches.service';

export default class MatchesController {
  constructor(private matchesService = new MatchesService()) {}

  public async getAll(req: Request, res: Response) {
    try {
      const matches = await this.matchesService.getAll();
      return res.status(200).json(matches);
    } catch ({ message }) {
      return res.status(500).json({ message });
    }
  }

  public async getOnGoing(req: Request, res: Response) {
    try {
      const mode: InProgress = req.query;
      const response = await this.matchesService.getOnGoing(mode);
      return res.status(200).json(response);
    } catch (e) {
      const error = e as Error;
      return res.status(500).json(error.message);
    }
  }

  public async finishMatch(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { code, message } = await this.matchesService.finishMatch(+id);
      return res.status(code).json({ message });
    } catch (e) {
      const error = e as Error;
      return res.status(500).json(error.message);
    }
  }
}
