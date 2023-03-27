const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const appointmentService = require('./services/AppointmentService');
const AppointmentService = require('./services/AppointmentService');


app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.set('view engine' , 'ejs')

mongoose.connect('mongodb://127.0.0.1/agendamento',{useNewUrlParser:true, useUnifiedTopology: true})

app.get('/', (req,res) => {
    res.render("index")
})

app.get("/cadastro", (req,res) => {
    res.render('create')
})
app.post("/create", async (req,res) => {
    var status = await appointmentService.create(
        req.body.name,
        req.body.email,
        req.body.description,
        req.body.cpf,
        req.body.date,
        req.body.time
        )

        if(status) {
            res.redirect('/')
        }else {
            res.send("falha!!!")
        }
})
app.get('/getcalendar' , async (req,res) => {
    var appointments = await appointmentService.GetAll(false)

    res.json(appointments)
})

app.get("/event/:id", async (req,res) => {
    var appointment = await AppointmentService.GetById(req.params.id)
    console.log(appointment)
    res.render('event', {appo: appointment})
})

app.post('/finished', async (req,res) => {
    var id = req.body.id
    await AppointmentService.Finish(id)
    res.redirect('/')
})

app.get('/list',async (req,res) => {

    var appos = await AppointmentService.GetAll(true);
    res.render('list',{appos})
})

app.get('/searchresult', async (req,res) => {
    var appos =await AppointmentService.Search(req.query.search)
    res.render('list',{appos})
})
var pollTime =3600 * 60 * 5
setInterval(async () => {
    await AppointmentService.SendNotification()
},pollTime)
app.listen(8989, () => {})