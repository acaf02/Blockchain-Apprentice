const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const connection = require('./database/database');
const Pergunta = require('./database/Pergunta');


connection
    .authenticate()
    .then(() => {
        console.log('conexão feita com banco de dados');
    })
    .catch ((msgErro) => {
        console.log(msgErro);
    })


//Express usar EJS com view engine
app.set('view engine', 'ejs');
app.use(express.static('public'));

//body parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//Rotas
app.get('/',(req,res) => {
    Pergunta.findAll({raw: true}).then(perguntas =>{
        console.log(perguntas)
        res.render('index'),{
            perguntas:perguntas
        }
    });
    
});

app.get('/perguntar', (req,res) => {
    res.render('perguntar');
})

app.post('/salvarpergunta', (req, res) =>{
    var titulo = req.body.titulo;
    var descricao = req.body.descricao;

    Pergunta.create({
        titulo: titulo,
        descricao: descricao
    }).then(() => {
        res.redirect('/');
    })
})

app.listen(8080, ()=> {
    console.log('app rodando!');
})