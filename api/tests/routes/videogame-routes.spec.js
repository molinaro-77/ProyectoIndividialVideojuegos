/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Videogame, conn } = require('../../src/db.js');

const agent = session(app);
const testVideogame = {
  name: 'ARK: Survival Evolved',
  description : 'test description',
  platforms : ['PC','PlayStation 4'],
  releaseDate : '2022-01-01',
  rating : 10.0
};

xdescribe('Videogame routes', () => {

  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));

  beforeEach(() => Videogame.sync({ force: true })
    .then(() => Videogame.create(testVideogame)));

  describe('GET /videogames', () => {
    it('should get 200', () =>
      agent.get('/videogames').expect(200)
    );
  });
});
