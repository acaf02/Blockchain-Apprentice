const mongoose = require('mongoose');
const articleModel = require("./article");

mongoose.connect('mongodb://127.0.0.1/aprendendomongo',{useNewUrlParser:true, useUnifiedTopology: true});

const Article = mongoose.model("Article", articleModel);

/*
//update

Article.findByIdAndUpdate('64185e5b5a1ffba89cac48f9',{author:"Ana"}).then(() => {
    console.log("update!")
}).catch(err => {
    console.log(err)
})

*/


//deletar
/*
Article.findByIdAndDelete("64185e6978c96cbec103816e").then (() => {
    console.log("Dado removido!");
}).catch(err => {
    console.log(err)
})

*/



//buscar dados em massa
Article.find({}).then(articles => {
    console.log(articles);
}).catch (err => {
    console.log(err);
});




/*
Article.findOne({'resume.author' : 'teste!!'}).then(article => {
    console.log(article);
}).catch(err => {
    console.log(err);
})

*/
/*
const artigo = new Article({title:"Olá", 
author:"Ana", 
body:"Node",
special: true,
resume: {
    content: "sjfkjflkd",
    author: "teste!!"
}});

artigo.save().then(() => {
    console.log("Artigo Salvo!")
}).catch(err => {
    console.log(err);
});
*/