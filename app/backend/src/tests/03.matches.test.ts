import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');


chai.use(chaiHttp);

const { expect } = chai;

// describe('Testa o fluxo Matches', () => {
//   it('Solicita todas partidas cadastradas', async () => {
//     sinon.stub(MatchesModel, 'findAll').resolves(mock.allMatches as IMatchResult[]);
//     const result = await chai.request(app).get('/matches')
//     expect(result.status).to.be.equal(200);
//   });
//   after(() => {
//     (MatchesModel.findAll as sinon.SinonStub).restore();
//   })
// });
