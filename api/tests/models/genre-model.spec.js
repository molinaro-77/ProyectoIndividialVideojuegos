const { Genre, conn } = require('../../src/db.js');
const { expect } = require('chai');

const testName = 'Action';
const secondTestName = 'Adventure';

describe('Genre Model', () => {
  before(() => conn.authenticate()
      .catch((err) => {
      console.error('Unable to connect to the database:', err);
      }));
  
    describe('Genre Validators', () => {
      beforeEach(() => Genre.sync({ force: true }));
      it('should throw an error if name is null', async () => {
        try {
          await Genre.create({name: null})
        }catch (err){
          expect(err.message).to.equal('notNull Violation: genre.name cannot be null');
        };
      });
      it('should not create a new Genre if it already exists', async () => {
        try {
          await Genre.create({name: testName});
          await Genre.create({name: testName});
        }catch (err){
          expect(err.message).to.not.be.undefined;
        }
      });
      it('should create new IDs for new genres', async () => {
          const firstGenre = await Genre.create({name : testName});
          const secondGenre = await Genre.create({name : secondTestName});
          expect(firstGenre.toJSON().id).to.not.equal(secondGenre.toJSON().id);
      })
  });
});