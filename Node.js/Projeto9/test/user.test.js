let app = require('../src/app')
let supertest= require('supertest')
let request = supertest(app)

let mainUSer = {name:"ana", email:"ana@hotmail.com", password:"1234"}

beforeAll(() => {

    return request.post("/user")
    .send(mainUSer)
    .then(res => {})
    .catch(err => {console.log(err)})
})

afterAll(() => {
    return request.delete(`user/${mainUSer.email}`)
    .then(res => {})
    .catch(err => {console.log(err)})
})

describe("Cadastro de usuário", () => {
    test("deve cadastrar um usuario com sucesso", () => {
        let time= Date.now();
        let email = `${time}gmail.com`
        let user = {name: "Ana", email, password:"5845"}

        return request.post("/user")
        .send(user)
        .then(res => {
            expect(res.statusCode).toEqual(200);
            expect(res.body.email).toEqual(email);
        }).catch(err => {
            console.log(err)
        })
    })

    test("deve imperdi que um usuario se cadastre com os dados vazios",() => {
        let user = {name: "", email: "", password:""}

        return request.post("/user")
        .send(user)
        .then(res => {
            expect(res.statusCode).toEqual(400);
        }).catch(err => {
            console.log(err)
        })

    })

    test("Deve impedir que um usuario se cadastre com um email repetido", () => {
        let time= Date.now();
        let email = `${time}gmail.com`
        let user = {name: "Ana", email, password:"5845"}

        return request.post("/user")
        .send(user)
        .then(res => {
            expect(res.statusCode).toEqual(200);
            expect(res.body.email).toEqual(email);

            return request.post('/user')
            .send(user)
            .then(res => {
            expect(res.statusCode).toEqual(400);
            expect(res.body.error).toEqual("E-mail já cadastrado");
            }).catch(err => {
                console.log(err)
            })
        }).catch(err => {
            console.log(err)
        })
    })
})

describe("autentificação", () => {
    test("deve me retornar um token quando logar", () => {
        return request.post("/auth")
        .send({email: mainUSer.email, password: mainUSer.password})
        .then(res => {
            expect(res.statusCode).toEqual(200)
            expect(res.body.token).toBeDefined()
        }).catch(err => {
            console.log(err)
        })
    })
    test("dve impedir q um usuario não cadastrado se logue", () => {
        return request.post("/auth")
        .send({email: 'qualquecoisa@hotmail.com', password: "45698"})
        .then(res => {
            expect(res.statusCode).toEqual(403)
            expect(res.body.errors.email).toEqual("email não cadastrado")
        }).catch(err => {
            console.log(err)
        })
    })
    test("dve impedir q um usuario não cadastrado se logue com senha errada", () => {
        return request.post("/auth")
        .send({email:mainUSer.email, password: "45698"})
        .then(res => {
            expect(res.statusCode).toEqual(403)
            expect(res.body.errors.password).toEqual("senha incorreta")
        }).catch(err => {
            console.log(err)
        })
    })
})