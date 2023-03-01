import * as chai from 'chai';
import * as sinon from 'sinon';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import TeamModel from '../database/models/Team.model';
import * as mock from './mock.teams';

chai.use(chaiHttp);

const { expect } = chai;

describe('Teste das migrations e model da Teams', () => {
  it('Busca todos os times cadastrados', async () => {
    sinon.stub(TeamModel, 'findAll').resolves(mock.allTeams as TeamModel[]);
    const result = await chai.request(app).get('/teams');
    expect(result.status).to.be.equal(200);
    expect(result.body).to.be.deep.equal(mock.allTeams);
  });
  it('Busca o time de id 2', async () => {
    sinon.stub(TeamModel, 'findOne').resolves(mock.oneTeam as TeamModel);
    const result = await chai.request(app).get('/teams/2');
    expect(result.status).to.be.equal(200);
    expect(result.body).to.be.deep.equal(mock.oneTeam);
  });
  after(() => {
    (TeamModel.findAll as sinon.SinonStub).restore();
    (TeamModel.findOne as sinon.SinonStub).restore();
  })
});

describe('Teste das migrations e model da Teams', () => {
  it('Testa o erro do findAll', async () => {
    sinon.stub(TeamModel, 'findAll').throws(new Error('Naodeu'));
    const result = await chai.request(app).get('/teams');
    expect(result.status).to.be.equal(500);
    expect(result.body.message).to.be.equal('Naodeu');
  });
  it('Testa o erro do findOne', async () => {
    sinon.stub(TeamModel, 'findOne').throws(new Error('Naodeu'));
    const result = await chai.request(app).get('/teams/2');
    expect(result.status).to.be.equal(500);
    expect(result.body.message).to.be.equal('Naodeu');
  });
  after(() => {
    (TeamModel.findAll as sinon.SinonStub).restore();
    (TeamModel.findOne as sinon.SinonStub).restore();
  })
});

describe('Testa procurar por time que não existe (camada Model)', () => {
  it('Busca pelo id 000 que não deve existir', async () => {
    sinon.stub(TeamModel, 'findOne').resolves(undefined);
    const result = await chai.request(app).get('/teams/000');
    expect(result.status).to.be.equal(404);
    expect(result.body.message).to.be.equal('Team not found');
  });
  after(() => {
    (TeamModel.findOne as sinon.SinonStub).restore();
  })
});
