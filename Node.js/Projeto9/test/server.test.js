let app = require('../src/app')
let supertest= require('supertest')
let request = supertest(app)

test("A aplicaçãode deve resposder na porta 3131",() => {

    return request.get('/').then(res => {
        let status = res.statusCode
        expect(status).toEqual(200)
    }).catch(err => {
        fail(err)
    })
})