# API de Games

## Endpoints

### GET /games
Esse endpoint é respondavel por mostrar a listagem de todos os games cadastrados no banco de dados.

#### Parametros
Nenhum.

#### Respostas
##### OK! 200
Caso essa resposta aconteça você irá receber a listagem de todos os games.

Exemplo de Resposta:
````
[
    {
        "id": 23,
        "title": "Call of Duty",
        "year": 2019,
        "price": 60
    },
    {
        "id": 65,
        "title": "Sea of Thieves",
        "year": 2018,
        "price": 48
    },
    {
        "id": 2,
        "title": "Minecraft",
        "year": 2012,
        "price": 20
    }
]
````


##### Falha de Autentificação! 401
Caso essa resposta aconteça, isso significa que aconteceu alguma falha durante o processo de autentificação da requisição. Motivos: Token inválido, Token expirado.

Exemplo de Resposta:
````
{
    "err": "Token Inválido"
}
````

## Endpoints

### POST /auth
Esse endpoint é respondavel por fazer o processo de login.

#### Parametros
email :  E-mail do usuário cadastrado no sistema.

password: Senha do usuário cadastrado no sistema, com aquele determinado e-mail.

Exemplo:
````
"email" : "nome@hotmail.com",
"password" : "1234"
````

#### Respostas
##### OK! 200
Caso essa resposta aconteça você irá receber o token JWT para conseguir acessar endpoints protegidos na API.

Exemplos de Resposta: 
````
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJhbmFAaG90bWFpbC5jb20iLCJpYXQiOjE2Nzg5NzA3OTksImV4cCI6MTY3OTE0MzU5OX0.PFfqBdLyydkz98JvII8KWJXsHchuxePZ2Agf-_4Ehk0"
}
````
##### Falha de Autentificação! 401
Caso essa resposta aconteça, isso significa que aconteceu alguma falha durante o processo de autentificação da requisição. Motivos: e-mail ou senha incorreto.

Exemplo de Resposta:
````
{
    err: "Credenciais inválidas!"
}
````