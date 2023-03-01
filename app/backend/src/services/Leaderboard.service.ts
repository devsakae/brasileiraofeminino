import MatchesModel from '../database/models/Matches.model';

export default class {
  protected matchesModel = MatchesModel;

  public async getAll() {
    const res = await this.matchesModel.findAll();
    return res;
  }
}
