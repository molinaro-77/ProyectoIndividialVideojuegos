/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app');
const { Genre, conn } = require('../../src/db.js');

const agent = session(app);
const testGenre = {
    name: 'Action',
};

describe('Genre routes', () => {
    before(() => conn.authenticate()
    .catch((err) => {
        console.error('Unable to connect to the database:', err);
    }));
    before(async () => {
        await conn.sync({ force: true });
        // await Genre.create(testGenre);
    });
    describe('GET /genres', () => {
        it('should get 200', async () => {
            await Genre.create(testGenre);
            const res = await agent.get('/genres')
            expect(res.statusCode).to.equal(200);
            console.log(res.body)
        }
    );
    after(()=> conn.close())
});
});
