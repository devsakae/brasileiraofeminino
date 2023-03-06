import * as chai from 'chai';
import * as sinon from 'sinon';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import ILeaderboard from '../interfaces/ILeaderboard';
import LeaderboardService from '../services/Leaderboard.service';
import * as mock from './mock.leaderboard';
const leaderService = new LeaderboardService();
chai.use(chaiHttp);

const { expect } = chai;

// describe('Testa os erros no fluxo Leaderboard', () => {
//   afterEach(() => {
//     (leaderService.getHome as sinon.SinonStub).restore();
//   })
//   it('Simula erro na requisição das partidas', async () => {
//     sinon.stub(leaderService, 'getHome').throws();
//     const result = await chai.request(app).get('/leaderboard')
//     expect(result.status).to.be.equal(500);
//   });
// });

describe('Testa o método Get no fluxo Leaderboard', () => {
  afterEach(() => {
    (leaderService.getHome as sinon.SinonStub).restore();
  })
  it('Recebe status 200 para a classificação', async () => {
    sinon.stub(leaderService, 'getHome').resolves(mock.leaderAll as ILeaderboard[]);
    const result = await chai.request(app).get('/leaderboard')
    expect(result.status).to.be.equal(200);
  });
  it('Recebe status 200 para a classificação dos mandantes', async () => {
    sinon.stub(leaderService, 'getHome').resolves(mock.leaderHome as ILeaderboard[]);
    const result = await chai.request(app).get('/leaderboard/home')
    expect(result.status).to.be.equal(200);
  });
  it('Recebe status 200 para a classificaçã dos visitanteso', async () => {
    sinon.stub(leaderService, 'getHome').resolves(mock.leaderAway as ILeaderboard[]);
    const result = await chai.request(app).get('/leaderboard/away')
    expect(result.status).to.be.equal(200);
  });
});
