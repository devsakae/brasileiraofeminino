import * as chai from 'chai';
import * as sinon from 'sinon';
// @ts-ignore
import chaiHttp = require('chai-http');

import { sign } from 'jsonwebtoken';
import { app } from '../app';
import MatchesModel from '../database/models/Matches.model';
import IMatchResult from '../interfaces/IMatchResult';
import MatchesServices from '../services/Matches.service';
import * as mock from './mock.matches';
const matchService = new MatchesServices();

chai.use(chaiHttp);

const { expect } = chai;

const VALIDTOKEN = sign({
  data: {
    id: 1,
    email: 'admin@admin.com',
    role: 'admin',
  }
}, 'jwt_secret', {
  expiresIn: '7d',
  algorithm: 'HS256',
});

describe('Testa a camada service do fluxo Matches', () => {
  afterEach(() => {
    (matchService.getAll as sinon.SinonStub).restore();
  })
  it('Solicita todas as partidas cadastradas no BD', async () => {
    sinon.stub(matchService, 'getAll').resolves(mock.allMatches as IMatchResult[]);
    const result = await chai.request(app).get('/matches');
    expect(result).to.have.status(200);
  });
});

describe('Testa o método PATCH', () => {
  afterEach(() => {
    (MatchesModel.update as sinon.SinonStub).restore();
  })
  it('Finaliza a partida de id 1', async () => {
    sinon.stub(MatchesModel, 'update').resolves([1]);
    const result = await chai.request(app).patch('/matches/1').set({ authorization: VALIDTOKEN });
    expect(result).to.have.status(200);
  });
  it('Edita a partida de id 1', async () => {
    sinon.stub(MatchesModel, 'update').resolves([1]);
    const result = await chai.request(app).patch('/matches/1').set({ authorization: VALIDTOKEN }).send({ params: { id: 1 }, body: { homeTeamGoals: 2, awayTeamGoals: 1 } });
    expect(result).to.have.status(200);
    expect(result.body).to.be.deep.equal({ message: 'Match edited' });
  });
});

describe('Testa o funcionamento do fluxo Matches', () => {
  afterEach(() => {
    (MatchesModel.findAll as sinon.SinonStub).restore();
  })
  it('Solicita todas as partidas', async () => {
    sinon.stub(MatchesModel, 'findAll').resolves(mock.allMatches as MatchesModel[]);
    const result = await chai.request(app).get('/matches');
    expect(result.status).to.be.equal(200);
    // expect(result.body).to.be.deep.equal(mock.matchesInProgress);
  });
  it('Solicita as partidas em andamento', async () => {
    sinon.stub(MatchesModel, 'findAll').resolves(mock.matchesInProgress as MatchesModel[]);
    const result = await chai.request(app).get('/matches?inProgress=true')
    expect(result.status).to.be.equal(200);
    expect(result.body).to.be.deep.equal(mock.matchesInProgress);
  });
  it('Solicita as partidas encerradas', async () => {
    sinon.stub(MatchesModel, 'findAll').resolves(mock.matchesFinished as MatchesModel[]);
    const result = await chai.request(app).get('/matches?inProgress=false')
    expect(result.status).to.be.equal(200);
    expect(result.body).to.be.deep.equal(mock.matchesFinished);
  });
});

describe('Testa os erros no fluxo Matches', () => {
  afterEach(() => {
    (MatchesModel.findAll as sinon.SinonStub).restore();
  })
  it('Simula erro na requisição das partidas', async () => {
    sinon.stub(MatchesModel, 'findAll').throws();
    const result = await chai.request(app).get('/matches');
    expect(result.status).to.be.equal(500);
  });
  it('Simula erro na requisição das partidas em andamento', async () => {
    sinon.stub(MatchesModel, 'findAll').throws();
    const result = await chai.request(app).get('/matches?inProgress=true');
    expect(result.status).to.be.equal(500);
  });
  it('Simula erro na requisição das partidas encerradas', async () => {
    sinon.stub(MatchesModel, 'findAll').throws();
    const result = await chai.request(app).get('/matches?inProgress=false');
    expect(result).to.have.status(500);
  });
});
