import ICalculateResult from '../interfaces/ICalculateResult';
import IMatchResult from '../interfaces/IMatchResult';
import calculateMatches from '../utils/calculateMatches';
import getCompleteMatches from '../utils/getCompleteMatches';
import getMatches from '../utils/getMatches';
import organize from '../utils/organizeScoring';
import MatchesServices from './Matches.service';

export default class {
  constructor(private matchService = new MatchesServices()) {}

  public async getComplete() {
    const data = await this.matchService.getOnGoing({ inProgress: 'false' });
    const matches = getCompleteMatches(data);
    const scoring = calculateMatches(matches);
    console.log('CALCULATE:', scoring);
    const result = organize(scoring);
    return result;
  }

  public async getHome() {
    const data = await this.matchService.getOnGoing({ inProgress: 'false' });
    const matches = getMatches({ home: true }, data as IMatchResult[]);
    const scoring = calculateMatches(matches as ICalculateResult[]);
    const result = organize(scoring);
    return result;
  }

  public async getAway() {
    const data = await this.matchService.getOnGoing({ inProgress: 'false' });
    const matches = getMatches({ home: false }, data as IMatchResult[]);
    const scoring = calculateMatches(matches as ICalculateResult[]);
    const result = organize(scoring);
    return result;
  }
}
