import TeamModel from '../models/Team.model';

export default class TeamService {
  public async getAll() {
    const teams = await TeamModel.findAll();
    return teams;
  }
}
