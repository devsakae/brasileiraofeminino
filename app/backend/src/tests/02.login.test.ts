import * as chai from 'chai';
import * as sinon from 'sinon';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import User from '../database/models/User.model.ts';

chai.use(chaiHttp);

const { expect } = chai;

describe('Verificação de Middlewares', () => {
  afterEach(() => {
    (User.findOne as sinon.SinonStub).restore();
  });
  it('Recebe erro na ausência do body na requisição', async () => {
    sinon.stub(User, 'findOne').throws('All fields must be filled');
    const response = await chai.request(app).post('/login').set({ email: 'admin@admin.com' });
    expect(response.status).to.be.equal(400);
    expect(response.body).to.be.deep.equal({ message: 'All fields must be filled' });
  });
  it('Solicita o role sem informar o token na requisição', async () => {
    sinon.stub(User, 'findOne').throws();
    const response = await chai.request(app).get('/login/role').set({ authorization: '' });
    expect(response.status).to.be.equal(401);
  });
  it('Solicita o role informando token inválido na requisição', async () => {
    sinon.stub(User, 'findOne').throws();
    const response = await chai.request(app).get('/login/role').set({ authorization: 'TOKEN' });
    expect(response.status).to.be.equal(401);
  });
});