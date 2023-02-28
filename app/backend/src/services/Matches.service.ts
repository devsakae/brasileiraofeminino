import MatchesModel from '../database/models/Matches.model';
import TeamModel from '../database/models/Team.model';

export default class MatchesServices {
  protected matchesModel = MatchesModel;
  protected teamModel = TeamModel;

  public async getAll() {
    const matches = await this.matchesModel.findAll();
    return matches;
  }
}
