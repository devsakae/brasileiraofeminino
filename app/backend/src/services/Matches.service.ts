import MatchesModel from '../database/models/Matches.model';
import TeamModel from '../database/models/Team.model';
import { InProgress } from '../interfaces/InProgress.interface';
import { NewMatch } from '../interfaces/NewMatch.interface';

export default class MatchesServices {
  protected matchesModel = MatchesModel;
  protected teamModel = TeamModel;

  public async getAll() {
    const matches = await this.matchesModel.findAll({
      include: [{ model: TeamModel, as: 'homeTeam', attributes: { exclude: ['id'] } },
        { model: TeamModel, as: 'awayTeam', attributes: { exclude: ['id'] } }],
    });
    return matches;
  }

  public async getOnGoing(mode: InProgress) {
    let params = ({ inProgress: false });
    if (mode.inProgress === 'true') params = ({ inProgress: true });
    const matches = await this.matchesModel.findAll({
      where: params,
      include: [{ model: TeamModel, as: 'homeTeam', attributes: { exclude: ['id'] } },
        { model: TeamModel, as: 'awayTeam', attributes: { exclude: ['id'] } }],
    });
    return matches;
  }

  public async finishMatch(id: number) {
    const matchStatus = await this.matchesModel.update(
      { inProgress: false },
      { where: { id } },
    );
    if (matchStatus[0] === 0) return { code: 304, message: 'Match already finished' };
    return { code: 200, message: 'Finished' };
  }

  public async editMatch(id: number, htg: number, atg: number) {
    const matchStatus = await this.matchesModel.update(
      {
        homeTeamGoals: htg,
        awayTeamGoals: atg,
      },
      { where: { id } },
    );
    if (matchStatus[0] === 0) return { code: 304, message: 'Match not changed' };
    return { code: 200, message: 'Match edited' };
  }

  public async newMatch(matchData: NewMatch) {
    const matchUpdated = await this.matchesModel.create({
      ...matchData,
      inProgress: true,
    });
    return { code: 200, message: matchUpdated };
  }
}
