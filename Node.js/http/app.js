var http = require('http');

http.createServer(function(requisiçao, resposta) {
    resposta.end('<h1>bem vindo ao meu site!</h1><h4>guiadoprogramador.com</h4>')
}).listen(5267);

console.log('meu servidor está rodando');