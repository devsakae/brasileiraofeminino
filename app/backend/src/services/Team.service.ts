import { Op } from 'sequelize';
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

  public async getTeams(idArray: number[]): Promise<unknown> {
    const teams = await this.teamModel.findAll({
      where: {
        id: {
          [Op.in]: idArray,
        },
      },
    });
    console.log('Meu teams:', teams);
    if (idArray.length !== teams.length) return { code: 404 };
    return { code: 'none' };
  }
}
