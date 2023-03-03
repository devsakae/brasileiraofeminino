import * as chai from 'chai';
import * as sinon from 'sinon';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import MatchesModel from '../database/models/Matches.model';
// import ILeaderboard from '../interfaces/ILeaderboard';
// import * as mock from './mock.leaderboard';

chai.use(chaiHttp);

const { expect } = chai;

// describe('Testa o fluxo Leaderboard', () => {
//   afterEach(() => {
//     (MatchesModel.findAll as sinon.SinonStub).restore();
//   })
//   it('Verifica o leaderboard dos times anfitriões', async () => {
//     sinon.stub(MatchesModel, 'findAll').resolves(mock.leaderHome as ILeaderboard[]);
//     const result = await chai.request(app).get('/leaderboard/home')
//     expect(result.status).to.be.equal(200);
//   });
// });

describe('Testa os erros no fluxo Leaderboard', () => {
  afterEach(() => {
    (MatchesModel.findAll as sinon.SinonStub).restore();
  })
  it('Simula erro na requisição das partidas', async () => {
    sinon.stub(MatchesModel, 'findAll').throws();
    const result = await chai.request(app).get('/leaderboard/home')
    expect(result.status).to.be.equal(500);
  });
  it('Simula erro na requisição das partidas em andamento', async () => {
    sinon.stub(MatchesModel, 'findAll').throws();
    const result = await chai.request(app).get('/leaderboard/away')
    expect(result.status).to.be.equal(500);
  });
});
