const request = require('supertest')

describe('GET /client', function () {
    it('responds with json', function (done) {
        request(app)
            .get('/clients')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done)
    })
})