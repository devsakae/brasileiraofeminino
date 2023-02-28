import { Request, Response } from 'express';
import MatchesService from '../services/Matches.service';

export default class MatchesController {
  constructor(private matchesService = new MatchesService()) {}

  public getAll = async (_req: Request, res: Response) => {
    try {
      const matches = await this.matchesService.getAll();
      res.status(200).json(matches);
    } catch ({ message }) {
      res.status(500).json({ message });
    }
  };

  // public getOne = async (req: Request, res: Response) => {
  //   try {
  //     const { id } = req.params;
  //     const response = await this.teamService.getOne(+id);
  //     if (response.code === 404) return res.status(404).json({ message: 'Team not found' });
  //     res.status(200).json(response);
  //   } catch (err: any) {
  //     res.status(500).json({ message: err.message });
  //   }
  // };
}
