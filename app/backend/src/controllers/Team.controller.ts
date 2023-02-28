import { Request, Response } from 'express';
import TeamService from '../services/Team.service';

export default class TeamController {
  constructor(private teamService = new TeamService()) {}

  public getAll = async (_req: Request, res: Response) => {
    try {
      const teams = await this.teamService.getAll();
      res.status(200).json(teams);
    } catch ({ message }) {
      res.status(500).json({ message });
    }
  };

  public getOne = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const response = await this.teamService.getOne(+id);
      if (response.code === 404) return res.status(404).json({ message: 'Team not found' });
      res.status(200).json(response);
    } catch ({ message }) {
      res.status(500).json({ message });
    }
  };
}
