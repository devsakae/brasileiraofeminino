import * as chai from 'chai';
import * as sinon from 'sinon';
// @ts-ignore
import chaiHttp = require('chai-http');
// import { app } from '../app';
import { Response } from 'superagent';
import TeamModel from '../database/models/Team.model';

chai.use(chaiHttp);

const { expect } = chai;

describe('Teste das migrations e model da Teams', () => {
  let chaiHttpResponse: Response;

  before(async () => {
    sinon
      .stub(TeamModel, "findAll")
      .resolves(
        [
          {
            "id": 1,
            "teamName": "Avaí/Kindermann"
          },
          {
            "id": 2,
            "teamName": "Bahia"
          },
          {
            "id": 3,
            "teamName": "Botafogo"
          }
        ] as TeamModel[]
      );
  });

  after(()=>{
    (TeamModel.findAll as sinon.SinonStub).restore();
  })

  it('Busca todos os times cadastrados', async () => {
    // chaiHttpResponse = await chai
    //    .request(app)
    // expect()
  });

  it('Seu sub-teste', () => {
    expect(false).to.be.eq(true);
  });
});
