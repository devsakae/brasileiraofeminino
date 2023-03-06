import * as chai from 'chai';
import * as sinon from 'sinon';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import UserModel from '../database/models/User.model.ts';

chai.use(chaiHttp);

const { expect } = chai;

describe('Verificação de Middlewares', () => {
  afterEach(() => (UserModel.findOne as sinon.SinonStub).restore());
  it('Recebe erro na ausência do body na requisição', async () => {
    sinon.stub(UserModel, 'findOne').throws('All fields must be filled');
    const response = await chai.request(app)
      .post('/login')
      .send({ email: 'user@user.com' });
    expect(response.status).to.be.equal(400);
    expect(response.body).to.be.deep.equal({ message: 'All fields must be filled' });
  });
  // it('Erro na requisição com o BD', async () => {
  //   sinon.stub(UserModel, 'findOne').resolves(undefined);
  //   await chai.request(app)
  //     .post('/login')
  //     .send({ email: 'admin@naoexiste.com', password: 'secret_admin' })
  //     .end(function (err, res) {
  //       expect(res).to.have.status(401);
  //     });
  // });
});