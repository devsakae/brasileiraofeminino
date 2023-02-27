import { Request, Response } from 'express';
import TeamService from '../services/team.service';

export default class TeamController {
  constructor(private teamService = new TeamService()) {}

  public getAll = async (_req: Request, res: Response) => {
    console.log('entrou no getAll');
    try {
      const teams = await this.teamService.getAll();
      res.status(200).json(teams);
    } catch (err: any) {
      res.status(500).json({ message: err.message });
    }
  };
}
