let express= require("express")
let app = express();

app.get("/", (req,res) => {
    res.json({sucess: true})
})

app.get('/cor/:pessoa', (req, res) => {
    let pessoa = req.params.pessoa;
    if(pessoa == 'ana') {
        res.json({cor:'vermelho', color:'red'})
    }
})

module.exports = app;