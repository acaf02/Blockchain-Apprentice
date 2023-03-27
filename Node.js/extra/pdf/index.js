var pdf = require('html-pdf')
var ejs = require("ejs")

var nomeUsuario = 'ana'
var curso = 'node'

ejs.renderFile('./arquivo.ejs',{nome: nomeUsuario,curso: curso}, (err, html) => {
    if(err) {
        console.log('erro')
    } else {
        pdf.create(html,{}).toFile('./teste.pdf',(err, res) => {
            if(err) {
                console.log('erro aconteceu')
            } else {
                console.log(res);
            }
        })
    }
})



