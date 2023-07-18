/* eslint-disable import/no-extraneous-dependencies */
const { Videogame, conn } = require('../../src/db');
const { expect } = require('chai');
const session = require('supertest-session');
const request = require('supertest');
const { Router } = require('express');
const getGenres = require('../../src/controllers/genres_controller');
const getVideogames = require('../../src/controllers/videogames_controller');
const videogameRouter = require('../../src/routes/index');
const { getPlatforms } = require('../../src/controllers/platforms_controller');

describe('getGenres', () => {
  it('returns an array of genres', () => {
    expect(getGenres()).expect.arrayOf();
  });
});

describe('getVideogames', () => {
  it('should return an array of videogames', () => {
    const videogames = getVideogames();
    expect(videogames).expect.arrayContaining();
  });

  let videogames = [
    { id: 1, title: 'Super Mario Bros.', platform: 'NES' },
    { id: 2, title: 'The Legend of Zelda', platform: 'NES' },
    { id: 3, title: 'Final Fantasy VII', platform: 'PlayStation' }
  ];
  console.log(videogames[0]); // { id: 1, title: 'Super Mario Bros.', platform: 'NES' }
  
  if (videogames && videogames.length > 0) {
    console.log(videogames[0]);
  } else {
    console.log('The videogames array is empty or undefined.');
  }
  
  it('should return an array of videogames with the correct properties', () => {
    const videogames = getVideogames();
    expect(videogames[1]).to.have.property('id');
    expect(videogames[2]).to.have.property('name');
    expect(videogames[3]).to.have.property('description');
    expect(videogames[1]).to.have.property('platforms');
    expect(videogames[1]).to.have.property('background_image');
    expect(videogames[3]).to.have.property('released');
    expect(videogames[1]).to.have.property('rating');
    expect(videogames[2]).to.have.property('genres');
  });
});

describe('videogameRouter', () => {
  it('should be an express router', () => {
    expect(videogameRouter).to.be.an.instanceOf(Router);
  });
  it('should have a get method', () => {
   expect(videogameRouter.get).to.be.an.instanceOf;
  });
  it('should have a post method', () => {
    expect(videogameRouter.post).to.be.an.instanceOf;
  });
  it('should have a put method', () => {
    expect(videogameRouter.put).to.be.an.instanceOf;
  });
  it('should have a delete method', () => {
    expect(videogameRouter.delete).to.be.an.instanceOf;
  });
});

describe('getPlatforms', () => {
  it('should return an array of platforms', () => {
    const platforms = platforms_controller();
    expect(platforms).expect.arrayContaining();
  });

  it('should return an array of platforms with the correct names', () => {
    const platforms = platforms_controller();
    expect(platforms[0]).to.equal('PlayStation 4');
    expect(platforms[1]).to.equal('Xbox One');
    expect(platforms[2]).to.equal('Nintendo Switch');
  });
});

// Otra forma:
// describe('GET /videogames/:id', () => {
//   it('should respond with status 200', async () => {
//     const response = await request(app).get('/videogames/1');
//     expect(response.statusCode).to.be.equal(200);
//   });

//   it('should respond with an object with the property access set to false if the API KEY information is invalid', async () => {
//     const response = await request(app).get(`/videogames/${API_KEY}`);
//     const access = { access: false };
//     expect(response.body).to.deep.equal(access);
//   });
  
// describe('POST /videogames', () => {
//   it('should save the videogame in the database', async () => {
//     const games = {
//       name: 'Super Mario Bros',
//       description: 'A classic platformer video game',
//       rating: 4.5
//     };
//     const response = await request(app).post('/videogames').send(games);
//     expect(response.body).to.deep.equal(games);
//   });

//   it('should add videogames to the database without deleting existing ones', async () => {
//     const videogame = {
//       id: 1923,
//       name: 'Super Mario Bros',
//       description: 'A classic platformer video game',
//       rating: 4.5
//     };
//     const response = await request(app).post('/videogames').send(videogame);
//     expect(response.body.length).to.be.equal(2);
//   });
// });

// describe('DELETE /videogames/:id', () => {
//   it('should return an array with all videogames if the requested ID does not exist', async () => {
//     const response = await request(app).delete('/videogames/3380');
//     expect(response.body.length).to.be.equal(2);
//   });

//   it('should delete the videogame from the database if the ID exists', async () => {
//     const response = await request(app).delete('/videogames/1923');
//     expect(response.body.length).to.be.equal(1);
//   });
// });
// });