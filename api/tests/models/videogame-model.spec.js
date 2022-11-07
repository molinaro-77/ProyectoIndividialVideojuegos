const { Videogame, conn } = require('../../src/db.js');
const { expect } = require('chai');

const testName = 'Rocket League';
const testDescription = 'test description';
const testPlatforms = ['PC','PlayStation 4'];
const testDate = '2022-01-01';
const testRating = 10.0

describe('Videogame Model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));

    describe('Validators', () => {
      beforeEach(() => Videogame.sync({ force: true }));
        it('should throw an error if name is null', async () => {
          try {
            await Videogame.create({name: null, description: testDescription, platforms: testPlatforms})
          }catch (err){
            expect(err.message).to.equal('notNull Violation: videogame.name cannot be null');
          };
        });
        it('should throw an error if description is null', async () => {
          try {
            await Videogame.create({name: testName, description: null, platforms: testPlatforms})
          }catch (err){
            expect(err.message).to.equal('notNull Violation: videogame.description cannot be null');
          };
        });
        it('should throw an error if platforms is null', async () => {
          try {
            await Videogame.create({name: testName, description: testDescription, platforms: null})
          }catch (err){
            expect(err.message).to.equal('notNull Violation: videogame.platforms cannot be null');
          };
        });
        it('should throw an error if rating is not a number', async () => {
          try {
            await Videogame.create({name: testName, description: testDescription, platforms: testPlatforms, releaseDate: testDate, rating: "wrongNumber"})
          }catch (err){
            expect(err).to.not.be.undefined;
          };
        });
        it('should work when everything is ok', async () => {
            const createdVideogame = await Videogame.create({
              name: testName,
              description: testDescription, 
              platforms: testPlatforms,
              releaseDate: testDate,
              rating : testRating
            });
            expect(createdVideogame.toJSON()).to.have.deep.property('name', testName);
            expect(createdVideogame.toJSON()).to.have.deep.property('description', testDescription);
            expect(createdVideogame.toJSON()).to.have.deep.property('platforms', testPlatforms);
            expect(createdVideogame.toJSON()).to.have.deep.property('releaseDate', testDate);
        });
        it('should not create two Characters with the same name', async () => {
          try {
            const videogameOne = await Videogame.create({
              name: testName,
              description: testDescription, 
              platforms: testPlatforms,
              releaseDate: testDate,
            })
            expect(videogameOne.toJSON()).to.have.deep.property('name', testName);
            expect(videogameOne.toJSON()).to.have.deep.property('description', testDescription);
            expect(videogameOne.toJSON()).to.have.deep.property('platforms', testPlatforms);
            expect(videogameOne.toJSON()).to.have.deep.property('releaseDate', testDate);
            await Videogame.create({
                name: testName,
                description: "anotherDescription", 
                platforms: ['Other platforms'],
                releaseDate: "2022-01-01",
              });
          } catch (error) {
            expect(error.message).to.equal('llave duplicada viola restricción de unicidad «videogames_name_key»');
          }
        });
    });
});
