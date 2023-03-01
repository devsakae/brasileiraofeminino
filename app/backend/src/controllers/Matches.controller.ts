import { Request, Response } from 'express';
import ErrorInterface from '../interfaces/Error.interface';
import { InProgress } from '../interfaces/InProgress.interface';
import newMatchSchema from '../schemas/newMatchSchema';
import MatchesService from '../services/Matches.service';
import TeamService from '../services/Team.service';

export default class MatchesController {
  constructor(
    private matchesService = new MatchesService(),
    private teamService = new TeamService(),
  ) {}

  public async getAll(_req: Request, res: Response) {
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

  public async editMatch(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { homeTeamGoals, awayTeamGoals } = req.body;
      const { code, message } = await this.matchesService
        .editMatch(+id, +homeTeamGoals, +awayTeamGoals);
      return res.status(code).json({ message });
    } catch (e) {
      const error = e as Error;
      return res.status(500).json(error.message);
    }
  }

  public async newMatch(req: Request, res: Response) {
    try {
      await newMatchSchema.validateAsync(req.body);
      const { homeTeamId, awayTeamId } = req.body;
      const response = await this.teamService.getTeams([homeTeamId, awayTeamId]) as ErrorInterface;
      if (response.code === 404) {
        return res.status(404).json({ message: 'There is no team with such id!' });
      }
      const { code, message } = await this.matchesService.newMatch(req.body);
      return res.status(code).json(message);
    } catch (e) {
      const error = e as Error;
      return res.status(500).json(error.message);
    }
  }
}
