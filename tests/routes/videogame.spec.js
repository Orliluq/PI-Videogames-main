/* eslint-disable import/no-extraneous-dependencies */
const { Videogame, conn } = require('../../src/db.js');
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');

const agent = session(app);

describe('Videogame routes', () => {
  describe('GET /videogames', () => {
    it('should get 200', () =>
      agent.get('/videogames').expect(200)
    );
  });
});

  beforeEach(() => Videogame.sync({ force: true }).then(() => {
    const videogame = {
      name: 'Super Mario Bros',
      description: 'A classic platformer video game',
      rating: 4.5
    };
    return Videogame.create(videogame);
  }));
  describe('GET /videogames', () => {
    it('should get 200', () =>
      agent.get('/videogames').expect(200)
    );
  });

