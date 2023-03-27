let app = require("../app")

describe("Operações basicas",() => {
    test("Deve retornar o valor 10 ao somer 5 + 5", () => {

        let resultado = app.soma(5,5)
    
        expect(resultado).toEqual(10)
    })
    
    test("Deve retornar o valor 10 ao mult 2 por 5", () => {
        let resultado = app.mult(2,5)
        expect(resultado).toEqual(10)
    })
})

