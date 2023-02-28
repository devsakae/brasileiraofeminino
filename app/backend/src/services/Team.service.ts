import TeamModel from '../database/models/Team.model';

export default class TeamService {
  protected teamModel = TeamModel;

  public async getAll() {
    const teams = await this.teamModel.findAll();
    return teams;
  }

  public async getOne(id: number) {
    const team = await this.teamModel.findByPk(id);
    if (!team) return { code: 404 };
    return team;
  }
}
