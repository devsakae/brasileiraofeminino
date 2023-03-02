import { ICalculateResult } from '../interfaces/ICalculateResult';
import calculateMatches from '../utils/calculateMatches';
import getMatches from '../utils/getMatches';
import organize from '../utils/organizeScoring';
import MatchesServices from './Matches.service';

export default class {
  constructor(private matchService = new MatchesServices()) {}

  public async getHome() {
    const res = await this.matchService.getOnGoing({ inProgress: 'false' });
    const matches: ICalculateResult[] = getMatches(res);
    const scoring = calculateMatches(matches);
    const result = organize(scoring);
    return result;
  }
}
