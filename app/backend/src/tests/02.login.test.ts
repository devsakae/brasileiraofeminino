import * as chai from 'chai';
import * as sinon from 'sinon';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import UserModel from '../database/models/User.model.ts';
import * as mock from './mock.users';

chai.use(chaiHttp);

const { expect } = chai;

describe('Testa o sistema de Login', () => {
  it('Recebe token do usuário?', async () => {
    sinon.stub(UserModel, 'findOne').resolves(mock.userUser as UserModel);
    chai.request(app)
      .post('/login')
      .send({ email: 'user@user.com', password: 'secret_user' })
      .end(function (res) {
        expect(res).to.have.status(200);
      });
  });
  after(() => {
    (UserModel.findOne as sinon.SinonStub).restore();
  })
});

describe('Testa o sistema de Login', () => {
  it('Erro na requisição com o BD', async () => {
    sinon.stub(UserModel, 'findOne').resolves(undefined);
    chai.request(app)
      .post('/login')
      .send({ email: 'admin@naoexiste.com', password: 'secret_admin' })
      .end(function (err, res) {
        expect(err).to.be.null;
        expect(res).to.have.status(401);
      });
  });
  after(() => {
    (UserModel.findOne as sinon.SinonStub).restore();
  })
});
