import { Request, Response } from 'express';
import LeaderboardService from '../services/Leaderboard.service';

export default class Leaderboard {
  constructor(private leaderService = new LeaderboardService()) {}

  // public async getComplete(_req: Request, res: Response) {
  //   const response = await this.leaderService.getComplete();
  //   return res.status(200).json(response);
  // }

  public async getHome(_req: Request, res: Response) {
    const response = await this.leaderService.getHome();
    return res.status(200).json(response);
  }

  public async getaway(_req: Request, res: Response) {
    const response = await this.leaderService.getAway();
    return res.status(200).json(response);
  }
}
