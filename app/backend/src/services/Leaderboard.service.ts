import ICalculateResult from '../interfaces/ICalculateResult';
import calculateMatches from '../utils/calculateMatches';
import getCompleteMatches from '../utils/getCompleteMatches';
import getMatches from '../utils/getMatches';
import organize from '../utils/organizeScoring';
import MatchesServices from './Matches.service';

export default class {
  constructor(private matchService = new MatchesServices()) {}

  public async getComplete() {
    const data = await this.matchService.getOnGoing({ inProgress: 'false' });
    const result: ICalculateResult[] = getCompleteMatches(data);
    // parada
    // const scoring = calculateMatches(matches);
    // const result = organize(scoring);
    return result;
  }

  public async getHome() {
    const data = await this.matchService.getOnGoing({ inProgress: 'false' });
    const matches: ICalculateResult[] = getMatches({ home: true }, data);
    const scoring = calculateMatches(matches);
    const result = organize(scoring);
    return result;
  }

  public async getAway() {
    const data = await this.matchService.getOnGoing({ inProgress: 'false' });
    const matches: ICalculateResult[] = getMatches({ home: false }, data);
    const scoring = calculateMatches(matches);
    const result = organize(scoring);
    return result;
  }
}
