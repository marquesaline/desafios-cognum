import { expect } from 'chai';
import chaiHttp from 'chai-http';
import chai from 'chai';
import { describe, it, before, after } from 'mocha';
import { MongoMemoryServer } from 'mongodb-memory-server';
import sinon from 'sinon'; 

import app from '../app'; 
import RandomUserService from '../services/randomUserService';
import mongoose from 'mongoose';
import Employee from '../models/employee.model';
import { RandomUserServiceMock, newEmployeeData, employees } from './mocks';

chai.use(chaiHttp);

describe('EmployeeController', () => {
  let mongoServer: any;
  let mongoUri: string;
  let connection: any;

  before(async () => {
    mongoServer = await MongoMemoryServer.create();
    mongoUri = await mongoServer.getUri();

    if (!mongoose.connection.readyState) {
      connection = await mongoose.connect(mongoUri);
    }
  });

  after(async () => {
    if (connection) {
      await connection.close();
    }
    
    await mongoServer.stop();
  });

  it('should create a new employee', async function () {

    const createFake = sinon.fake.resolves(newEmployeeData);
    sinon.replace(Employee, 'create', createFake);

    const res = await chai.request(app.server)
      .post('/api/employees')
      .send(newEmployeeData);
  
    sinon.restore();

    expect(res.status).to.be.equal(201);
    expect(res.body).to.deep.equal(newEmployeeData);

  });
  
  it('should fetch all employees', async () => {
    const findFake = sinon.fake.resolves(employees);
    sinon.replace(Employee, 'find', findFake);

    const res = await chai.request(app.server)
      .get('/api/employees');

    sinon.restore();

    expect(res.status).to.be.equal(200);
    expect(res.body).to.deep.equal(employees);
  });

  it('should fetch an employee by ID', async () => {
    const id = newEmployeeData._id;
    const findByIdFake = sinon.fake.resolves(newEmployeeData);
    sinon.replace(Employee, 'findById', findByIdFake);

    const res = await chai.request(app.server)
      .get(`/api/employees/${id}`);

    sinon.restore();

    expect(res.status).to.be.equal(200);
    expect(res.body).to.deep.equal(newEmployeeData);
  });

  it('should update an employee by ID', async () => {
    const id = newEmployeeData._id;
    const updatedEmployeeData = {
      ...newEmployeeData,
      firstName: 'José', 
    };

    const findByIdAndUpdateFake = sinon.fake.resolves(updatedEmployeeData);
    sinon.replace(Employee, 'findByIdAndUpdate', findByIdAndUpdateFake);

    const res = await chai.request(app.server)
      .put(`/api/employees/${id}`)
      .send(updatedEmployeeData);

    sinon.restore();

    expect(res.status).to.be.equal(200);
    expect(res.body).to.deep.equal(updatedEmployeeData);
  });

  it('should delete an employee by ID', async () => {
    const id = newEmployeeData._id;
    const deletedEmployee = {
      ...newEmployeeData,
    };

    const findByIdAndRemoveFake = sinon.fake.resolves(deletedEmployee);
    sinon.replace(Employee, 'findByIdAndRemove', findByIdAndRemoveFake);

    const res = await chai.request(app.server)
      .delete(`/api/employees/${id}`);

    sinon.restore();

    expect(res.status).to.be.equal(200);
    expect(res.body).to.deep.equal({ message: 'Employee deleted successfully' });
  });

  it('should populate the database with 10 employees', async function() {
  
    const fetchRandomUsersStub = sinon.stub(RandomUserService, 'fetchRandomUsers').resolves(RandomUserServiceMock);
    const insertManyStub = sinon.stub(Employee, 'insertMany').resolves(RandomUserServiceMock);
  
    const res = await chai.request(app.server)
      .get('/api/populate');
  
    fetchRandomUsersStub.restore();
    insertManyStub.restore();
    
    expect(res.status).to.be.equal(201);
    expect(res.body).to.be.an('array');
    
    sinon.assert.calledOnce(insertManyStub);
    sinon.assert.calledWithExactly(insertManyStub, sinon.match.array);
  });
  
});
