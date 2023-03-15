const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const jwt = require("jsonwebtoken");

const jwtSecret = "issoeumasenha"

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


function auth(req, res, next) {

    const authToken = req.headers['authorization']

    if(authToken != undefined) {

        const bearer = authToken.split(' ')
        var token = bearer[1]

        jwt.verify(token, jwtSecret, (err,data)=> {
            if(err) {
                res.status(401)
                res.json({err:"Token Inválido"})
            } else {

                req.token = token
                req.loggedUser = {id: data.id, email: data.email}
                next()
            }
        })
    } else {
        res.status(401)
        res.json({err: "Token Inválido"})
    }
    
}

//BD falso

var BD = {
    games:[
        {
            id: 23,
            title: "Call of Duty",
            year: 2019,
            price: 60
        },
        {
            id: 65,
            title: "Sea of Thieves",
            year: 2018,
            price: 48
        },
        {
            id: 2,
            title: "Minecraft",
            year: 2012,
            price: 20
        }
    ],
    users: [
        {
            id:1,
            name:"Ana",
            email:'ana@hotmail.com',
            password: 'anacaf'
    },
        {
            id:20,
            name:"Ismael",
            email:"ismael@hotmail.com",
            password:'ixma123'
        }
    ]
}

app.get("/games",auth,(req,res) => {
    res.statusCode = 200;
    res.json(BD.games);
});

app.get("/game/:id", (req,res) => {
    
    if(isNaN(req.params.id)){
        res.sendStatus(400)
    }else {
        var id = parseInt(req.params.id);

        var game = BD.games.find(g => g.id == id);

        if(game != undefined) {
            res.statusCode = 200;
            res.json(game);
        } else {

            res.sendStatus(404);
        }
    }
})

//cadastrar game
app.post("/game", (req, res) => {

    var {title, price, year} = req.body;

    BD.games.push({
        id: 26,
        title,
        price,
        year
    })

    res.sendStatus(200);
})

app.delete("/game/:id", (req,res) => {
     
    if(isNaN(req.params.id)){
        res.sendStatus(400)
    }else {
        var id = parseInt(req.params.id);
        var index = BD.games.findIndex(g => g.id == id);

        if(index == -1) {
            res.sendStatus(404)
        } else {
            BD.games.splice(index,1);
            res.sendStatus(200);
        } 
    }
})

app.put("/game/:id",(req, res) => {

    if(isNaN(req.params.id)){
        res.sendStatus(400);
    }else{
        
        var id = parseInt(req.params.id);

        var game = BD.games.find(g => g.id == id);

        if(game != undefined){

            var {title, price, year} = req.body;

            
            if(title != undefined){
                game.title = title;
            }

            if(price != undefined){
                game.price = price;
            }

            if(year != undefined){
                game.year = year;
            }
            
            res.sendStatus(200);

        }else{
            res.sendStatus(404);
        }
    }

});

app.post("/auth", (req,res) => {
    var{email, password} = req.body;
    if(email != undefined) {
       var user = BD.users.find(u => u.email == email)

       if(user!= undefined) {

        if(user.password == password) {

            jwt.sign({id: user.id,email: user.email},jwtSecret,{expiresIn:'48h'},(err, token) => {
                if(err) {
                    res.status(400)
                    res.json({err:"Falha Interna"})
                } else {
                    res.status (200)
                    res.json({token: token})
                }
            })
        } else {
            res.status(401)
            res.json({err: "Credenciais inválidas!"})
        }
       } else {
        res.status(404);
        res.json({err: "E-mail inexistente!"})
       }
    } else {
        res.status (400)
        res.json({err: "E-mail inválido!"})
    }
})

app.listen(3435, () => {
    console.log("API RODANDO!");
});