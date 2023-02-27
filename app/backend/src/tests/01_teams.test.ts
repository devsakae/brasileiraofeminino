import * as chai from 'chai';
import * as sinon from 'sinon';
// @ts-ignore
import chaiHttp = require('chai-http');

import Teams from '../database/models/Team.model';

import { Response } from 'superagent';

chai.use(chaiHttp);

const { expect } = chai;

// type Team = {
//   id: number,
//   team_name: string;
// }

describe('Teste das migrations e model da Teams', () => {
  let chaiHttpResponse: Response;

  before(async () => {
    sinon
      .stub(Teams, "findOne")
      .resolves(
        // { }
        // as Team
      );
  });

  after(()=>{
    (Teams.findOne as sinon.SinonStub).restore();
  })

  it('...', async () => {
    // chaiHttpResponse = await chai
    //    .request(app)
    //    ...

    // expect(...)
  });

  it('Seu sub-teste', () => {
    expect(false).to.be.eq(true);
  });
});
