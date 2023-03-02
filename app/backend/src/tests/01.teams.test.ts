import * as chai from 'chai';
import * as sinon from 'sinon';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import TeamModel from '../database/models/Team.model';
import * as mock from './mock.teams';

chai.use(chaiHttp);

const { expect } = chai;

describe('Testa o fluxo Teams', () => {
  afterEach(() => {
    (TeamModel.findAll as sinon.SinonStub).restore();
  })
  it('Busca todos os times cadastrados', async () => {
    sinon.stub(TeamModel, 'findAll').resolves(mock.allTeams as TeamModel[]);
    const result = await chai.request(app).get('/teams');
    expect(result.status).to.be.equal(200);
    expect(result.body).to.be.deep.equal(mock.allTeams);
  });
});

describe('Testa o fluxo Teams', () => {
  afterEach(() => {
    (TeamModel.findOne as sinon.SinonStub).restore();
  })
  it('Busca (e encontra) o time de id 2', async () => {
    sinon.stub(TeamModel, 'findOne').resolves(mock.oneTeam as TeamModel);
    const result = await chai.request(app).get('/teams/2');
    expect(result.status).to.be.equal(200);
    expect(result.body).to.be.deep.equal(mock.oneTeam);
  });
  it('Busca pelo id 000 que não deve existir', async () => {
    sinon.stub(TeamModel, 'findOne').resolves(undefined);
    const result = await chai.request(app).get('/teams/000');
    expect(result.status).to.be.equal(404);
    expect(result.body.message).to.be.equal('Team not found');
  });
});

describe('Testa os erros do fluxo Teams', () => {
  it('Testa o erro do findAll', async () => {
    sinon.stub(TeamModel, 'findAll').throws();
    const result = await chai.request(app).get('/teams');
    expect(result.status).to.be.equal(500);
  });
  it('Testa o erro do findOne', async () => {
    sinon.stub(TeamModel, 'findOne').throws();
    const result = await chai.request(app).get('/teams/2');
    expect(result.status).to.be.equal(500);
  });
});
