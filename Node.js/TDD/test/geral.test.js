let supertest = require("supertest")
let app = require("../src/app")

let request = supertest(app)

test("A aplicação deve responder na porta 3131", () => {
    return request.get('/').then(res => expect(res.statusCode).toEqual(200))

})

test('deve retornar vermelhor', () => {
    return request.get("/cor/ana").then(res => {
        expect(res.statusCode).toEqual(200)
        expect(res.body.cor).toEqual("vermelho")
        expect(res.body.color).toEqual("red")
    })
})