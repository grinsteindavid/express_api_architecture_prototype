const request = require('supertest')
const app = require('../app')

describe('GET /clients', function () {
    it('responds with json', function (done) {
        request(app)
            .get('/api/clients')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done)
    })
})