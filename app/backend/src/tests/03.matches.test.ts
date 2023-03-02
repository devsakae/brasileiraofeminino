import * as chai from 'chai';
import * as sinon from 'sinon';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import MatchesModel from '../database/models/Matches.model';
import * as mock from './mock.matches';

chai.use(chaiHttp);

const { expect } = chai;

describe('Testa o fluxo Matches', () => {
  it('Solicita as partidas cadastradas', async () => {
    sinon.stub(MatchesModel, 'findAll').resolves(mock.allMatches as MatchesModel[]);
    const result = await chai.request(app).get('/matches')
    expect(result.status).to.be.equal(200);
  });
  after(() => {
    (MatchesModel.findAll as sinon.SinonStub).restore();
  })
});

describe('Testa o funcionamento do fluxo Matches', () => {
  afterEach(() => {
    (MatchesModel.findAll as sinon.SinonStub).restore();
  })
  it('Solicita todas as partidas', async () => {
    sinon.stub(MatchesModel, 'findAll').resolves(mock.matchesInProgress as MatchesModel[]);
    const result = await chai.request(app).get('/matches')
    expect(result.status).to.be.equal(200);
    expect(result.body).to.be.deep.equal(mock.matchesInProgress);
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
    const result = await chai.request(app).get('/matches')
    expect(result.status).to.be.equal(500);
  });
  it('Simula erro na requisição das partidas em andamento', async () => {
    sinon.stub(MatchesModel, 'findAll').throws();
    const result = await chai.request(app).get('/matches?inProgress=true')
    expect(result.status).to.be.equal(500);
  });
  it('Simula erro na requisição das partidas encerradas', async () => {
    sinon.stub(MatchesModel, 'findAll').throws();
    const result = await chai.request(app).get('/matches?inProgress=false')
    expect(result.status).to.be.equal(500);
  });
});
